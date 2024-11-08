const PinnedVideo = ({ videoURL }) => {
  return (
    <video key={videoURL} controls style={{ height: '100px', margin: '5px' }}>
      <source src={videoURL} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default PinnedVideo;
