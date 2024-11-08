const PinnedDocument = ({ documentURL, documentName }) => {
  return (
    <div
      key={documentURL}
      style={{
        width: '100px',
        height: '100px',
        margin: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #ccc',
        position: 'relative',
      }}
    >
      <span
        style={{
          fontSize: '24px',
          cursor: 'pointer',
        }}
      >
        📄
      </span>
      <a
        href={documentURL}
        download={documentName}
        style={{ fontSize: '12px' }}
      >
        Файл
      </a>
    </div>
  );
};

export default PinnedDocument;
