import React, { useEffect, useState } from 'react';

const JsonEditorComponent = (props) => {
  const { record, onChange, property } = props;
  const [faq, setFaq] = useState(() => {
    return Object.keys(record.params)
      .filter((key) => key.startsWith(`${property.name}.`))
      .reduce((acc, key) => {
        const [_, index, field] = key.split('.');
        if (!acc[index]) acc[index] = {};
        acc[index][field] = record.params[key];
        return acc;
      }, []);
  });

  useEffect(() => {
    // console.log('JsonEditorComponent loaded');
    // console.log('record:', record);
    // console.log('property:', property);
    // console.log('Initial FAQ:', faq);
  }, [record, property, faq]);

  const updateFaq = (index, key, value) => {
    const updatedFaq = [...faq];
    updatedFaq[index] = {
      ...updatedFaq[index],
      [key]: value,
    };
    setFaq(updatedFaq);
    onChange({
      ...record,
      params: {
        ...record.params,
        ...updatedFaq.reduce((acc, item, i) => {
          acc[`${property.name}.${i}.question`] = item.question;
          acc[`${property.name}.${i}.answer`] = item.answer;
          return acc;
        }, {}),
      },
    });
  };

  const addFaqItem = () => {
    const updatedFaq = [...faq, { question: '', answer: '' }];
    setFaq(updatedFaq);
    onChange({
      ...record,
      params: {
        ...record.params,
        ...updatedFaq.reduce((acc, item, i) => {
          acc[`${property.name}.${i}.question`] = item.question;
          acc[`${property.name}.${i}.answer`] = item.answer;
          return acc;
        }, {}),
      },
    });
  };

  const removeFaqItem = (index) => {
    const updatedFaq = faq.filter((_, i) => i !== index);
    setFaq(updatedFaq);
    onChange({
      ...record,
      params: {
        ...record.params,
        ...updatedFaq.reduce((acc, item, i) => {
          acc[`${property.name}.${i}.question`] = item.question;
          acc[`${property.name}.${i}.answer`] = item.answer;
          return acc;
        }, {}),
      },
    });
  };

  return (
    <div style={{ marginBottom: 20, fontSize: 12, fontFamily: 'Roboto' }}>
      <label>{property.label}</label>
      {faq.map((item, index) => (
        <div key={index} style={{ marginBottom: 10 }}>
          <label>Question</label>
          <textarea
            value={item.question}
            style={{ width: '100%', marginBottom: 5 }}
            onChange={(e) => updateFaq(index, 'question', e.target.value)}
          />
          <label>Answer</label>
          <textarea
            value={item.answer}
            style={{ width: '100%', marginBottom: 5 }}
            onChange={(e) => updateFaq(index, 'answer', e.target.value)}
          />
          <button type="button" onClick={() => removeFaqItem(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addFaqItem}>
        Add FAQ
      </button>
    </div>
  );
};

export default JsonEditorComponent;
