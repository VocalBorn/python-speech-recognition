// src/components/Header.jsx
import { useState } from "react";
import { useEffect,useRef}  from "react";

function Recorder({isRecording,onClick}){
  const mediaRecorderRef = useRef(null); //儲存MediaRecorder實例
  const [audioURL,setAudioURL]=useState(''); // 儲存錄音的URL 
  const chunksRef = useRef([]); // 儲存錄音的數據片段

  useEffect(() => {
    
    if(isRecording){
      
      navigator.mediaDevices.getUserMedia({audio:true})
      .then((stream) =>{
        console.log("成功取得麥克風", stream);

        const mediaRecorder = new MediaRecorder(stream);//創建MediaRecorder實例
        mediaRecorderRef.current=mediaRecorder;//儲存MediaRecorder實例
        
        mediaRecorder.start();//開始錄音
        console.log("錄音開始");

        mediaRecorder.ondataavailable=(e)=>{
          chunksRef.current.push(e.data);//獎錄音片段存入數組
          console.log("錄音片段",e.data);
        }  

        mediaRecorderRef.current.onstop=()=>{
          const audioBlob = new Blob(chunksRef.current,{type:"audio/webm"});//將數據片段轉變為Blob對象
          audioURL=URL.createObjectURL(audioBlob);//創建URL
          setAudioURL(audioURL);//設置音頻URL
          console.log("錄音結束，音頻URL :",audioURL);
          chunksRef.current=[];//清空數據組件
          mediaRecorderRef.current=null;//清空MediaRecorder實例
        }

        
      })
      .catch((err) =>{
        console.error("錯誤，使用者拒絕或者沒有麥克風",err);
      })
    
    }
    else{
      //停止錄音
      if(mediaRecorderRef.current && mediaRecorderRef.current.state!=="inactive"){
        mediaRecorderRef.current.stop();//停止錄音
        mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());//停止所有音頻流
        console.log("錄音結束");
      }
    }
 

  },[isRecording]);

  return (
    <>
      {/* 錄音按鈕 */}
      <button className="record-button" onClick={onClick}>
        {isRecording ? '停止錄音' : '開始錄音'}
        <img 
          src={isRecording ? '/stop.png' : '/record.png'} // 顯示不同圖示
          alt="錄音圖示"
        />
        <p className="message">
          {isRecording ? '正在錄音' : '錄音完成'}
        </p>
      </button>

      {/* 若有錄音結果，顯示音訊播放器 */}
      {audioURL && (
        <audio controls src={audioURL} className="audio-player" />
      )}
    </>
  );
}


export default Recorder;
