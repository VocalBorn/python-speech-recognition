import { useState } from 'react';
import './App.css';
import Recorder from './components/recorder.jsx';
import RecorderButton from './components/recorderButton.jsx';
import { useAudioRecorder } from './hooks/useAudioRecorder.js';

function App() {
  const [isRecording, setIsRecording] = useState(false);
  const { audioURL, error } = useAudioRecorder(isRecording);

  const handleClick = () => {
    setIsRecording((prev) => !prev);
  };

  return (
    <div className="container">
      <h1 className="title">錄音介面</h1>

      
      <RecorderButton isRecording={isRecording} onClick={handleClick} />

      {error && <p className="message">⚠️ 錯誤：{error.message}</p>}

      <div className="result">
        <h2 className="result-title">錄音結果</h2>
        <p className="result-text">請點擊上方按鈕開始錄音</p>
        <Recorder audioURL={audioURL} />
      </div>
    </div>
  );
}

export default App;
