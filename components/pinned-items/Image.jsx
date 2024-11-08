import React from 'react';
import PinnedFile from './PinnedFile';

const Image = (props) => {
  const { record, property } = props;
  const value = record.params[property.name];

  if (!value) {
    return <div></div>;
  }

  const getFileType = (url) => {
    const format = url.split('.')[url.split('.').length - 1];

    if (
      format === 'jpg' ||
      format === 'png' ||
      format === 'jpeg' ||
      format === 'JPG' ||
      format === 'PNG' ||
      format === 'JPEG'
    ) {
      return 'image';
    } else if (format === 'mp3' || format === 'wav') {
      return 'audio';
    } else if (format === 'mp4') {
      return 'video';
    } else {
      return 'document';
    }
  };

  return (
    <div>
      <PinnedFile
        key={0}
        fileType={getFileType(value)}
        fileURL={value}
        fileName={value.split('/')[value.split('/').length - 1]}
        index={0}
      />
      {/* <img src={value} alt="Image" style={{ maxWidth: "200px" }} /> */}
    </div>
  );
};

export default Image;
