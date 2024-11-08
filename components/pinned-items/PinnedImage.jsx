import React, { useState } from 'react';

const PinnedImage = ({ imageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <img
        key={imageURL}
        src={imageURL}
        alt="file"
        style={{
          height: '100px',
          maxWidth: '100px',
          margin: '5px',
          cursor: 'pointer',
          objectFit: 'cover',
        }}
        onClick={openModal}
      />
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={closeModal}
        >
          <img
            src={imageURL}
            alt="file"
            style={{
              maxHeight: '90%',
              maxWidth: '90%',
            }}
          />
        </div>
      )}
    </>
  );
};

export default PinnedImage;
