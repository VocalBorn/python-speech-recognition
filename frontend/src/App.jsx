import { useState } from 'react';
import './App.css';

function App() {
  const [isRecording, setIsRecording] = useState(false);

  const handleClick = () => {
    setIsRecording((prev) => !prev);
  };

  return (
    <div className="container">
      <h1 className="title">語音辨識</h1>
      <button className="record-button" onClick={handleClick}>
        {isRecording ? '停止錄音' : '開始錄音'}
        <img
          src={isRecording ? '/stop.png' : '/record.png'}
          alt={isRecording ? '停止錄音圖示' : '開始錄音圖示'}
        />
      </button>
      <p className="message">
        {isRecording ? '正在錄音' : '錄音完成'}
      </p>
      <div className="result">
        <h2 className="result-title">錄音結果</h2>
        <p className="result-text">這裡顯示錄音結果</p>
      </div>
    </div>
  );
}

export default App;
