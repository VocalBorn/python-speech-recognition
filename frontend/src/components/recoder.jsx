// src/components/Header.jsx
function Recorder(isRecording,onClick){
  return (
    <>
    <button className="record-button" onClick={onClick}>
      {isRecording?'停止錄音':'開始錄音'}
      <img 
      src={isRecording? '/.stop.png':'.record.png'}
      alt={isRecording? '停止錄音圖示':'開始錄音圖示'} 
      />

      <p className="message">
        {isRecording?'正在錄音':'錄音完成'}
      </p>
    </button>
    </>
  );
}

export default Recorder;
