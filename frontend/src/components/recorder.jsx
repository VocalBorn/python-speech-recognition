// src/components/Recorder.jsx
function Recorder({ audioURL }) {
  return (
    <div>
      {audioURL && (
        <div>
          <p>錄音完成：</p>
          <audio controls src={audioURL} />
        </div>
      )}
    </div>
  );
}

export default Recorder;
