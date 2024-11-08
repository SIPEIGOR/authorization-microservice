const UnpinButton = ({ onRemove }) => {
  return (
    <button
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        color: 'white',
        borderRadius: '50%',
        border: 'solid 2px gray',
        width: '20px',
        height: '20px',
        textAlign: 'center',
        lineHeight: '4px',
        fontWeight: 'bold',
        margin: '0',
        cursor: 'pointer',
        display: 'flex',
      }}
      onClick={onRemove}
    >
      <span
        style={{
          fontSize: '20px',
          position: 'absolute',
          top: 6,
          right: 2.5,
          color: 'gray',
        }}
      >
        ×
      </span>
    </button>
  );
};

export default UnpinButton;
