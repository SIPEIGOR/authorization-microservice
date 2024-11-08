import PinnedAudio from './PinnedAudio';
import PinnedDocument from './PinnedDocument';
import PinnedImage from './PinnedImage';
import PinnedVideo from './PinnedVideo';
import UnpinButton from './UnpinButton';

const PinnedFile = ({ fileURL, fileType, fileName, onRemove, index }) => {
  const removeFile = () => {
    onRemove(index);
  };

  return (
    <div
      key={fileURL}
      style={{
        display: 'flex',
        position: 'relative',
      }}
    >
      {fileType != 'image' && (
        <p
          style={{
            position: 'absolute',
            top: '-15px',
            left: '0',
            fontSize: '12px',
            color: '#fff',
            backgroundColor: '#C0C0CA',
            padding: '0 5px',
            borderRadius: '5px',
          }}
        >
          {decodeURI(fileName.split('.')[0] || filename)}
        </p>
      )}
      {fileType === 'image' && <PinnedImage imageURL={fileURL} />}
      {fileType === 'audio' && <PinnedAudio audioURL={fileURL} />}
      {fileType === 'video' && <PinnedVideo videoURL={fileURL} />}
      {fileType !== 'image' && fileType !== 'audio' && fileType !== 'video' && (
        <PinnedDocument documentURL={fileURL} documentName={fileName} />
      )}
      {onRemove && <UnpinButton onRemove={removeFile} />}
    </div>
  );
};

export default PinnedFile;
