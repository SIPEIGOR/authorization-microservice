import React from 'react';
import HtmlRenderer from './HtmlRenderer';

const TextField = (props) => {
  const { record, property } = props;
  const value = record.params[property.name];

  if (!value) {
    return <div></div>;
  }

  return (
    <div>
      <p style={{ color: '#898A9A' }}>{property.label}</p>
      <HtmlRenderer htmlString={value} />
    </div>
  );
};

export default TextField;
