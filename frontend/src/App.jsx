import { useState } from 'react';
import './App.css';
import Recorder from './components/recoder.jsx';
import RecorderButton from './components/recorderButton.jsx';

function App() {
  const [isRecording, setIsRecording] = useState(false); 

  const handleClick = () => {
    setIsRecording((prev) => !prev);
  };

  return (
    <div className="container">

      <h1 className="title">語音辨識</h1>
      
      <RecorderButton isRecording={isRecording} onClick={handleClick}/>

      <div className="result">
        <h2 className="result-title">錄音結果</h2>
        <p className="result-text">這裡顯示錄音結果</p>
      </div>
    </div>
  );
}

export default App;
