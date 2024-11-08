import React, { useEffect } from 'react';

const JsonShowComponent = (props) => {
  const { record, property } = props;

  useEffect(() => {
    // console.log('JsonShowComponent loaded');
    // console.log('record:', record);
    // console.log('property:', property);
    // console.log('FAQ data:', record.params[property.name]);
  }, [record, property]);

  // Перетворення розділених ключів у масив об'єктів
  const faq = Object.keys(record.params)
    .filter((key) => key.startsWith(`${property.name}.`))
    .reduce((acc, key) => {
      const [_, index, field] = key.split('.');
      if (!acc[index]) acc[index] = {};
      acc[index][field] = record.params[key];
      return acc;
    }, []);

  return (
    <div style={{ fontSize: 14, fontFamily: 'Roboto' }}>
      <label>{property.label}</label>
      {faq.length > 0 ? (
        faq.map((item, index) => (
          <div key={index} style={{ marginBottom: 10 }}>
            <strong>Question:</strong> {item.question}
            <br />
            <strong>Answer:</strong> {item.answer}
          </div>
        ))
      ) : (
        <p>No FAQs available</p>
      )}
    </div>
  );
};

export default JsonShowComponent;
