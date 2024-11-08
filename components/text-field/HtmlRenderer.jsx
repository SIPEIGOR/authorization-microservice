import React from 'react';
import ShadowDomComponent from './ShadowDomComponent';

const HtmlRenderer = ({ htmlString }) => {
  return (
    <ShadowDomComponent>
      <div
        style={{
          border: 'gray 1px solid',
        }}
        dangerouslySetInnerHTML={{ __html: htmlString }}
      />
    </ShadowDomComponent>
  );
};

export default HtmlRenderer;
