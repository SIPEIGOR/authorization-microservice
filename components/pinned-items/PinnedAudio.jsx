const PinnedAudio = ({ audioURL }) => {
  return (
    <audio
      key={audioURL}
      controls
      style={{
        margin: 'auto',
      }}
    >
      <source src={audioURL} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default PinnedAudio;
