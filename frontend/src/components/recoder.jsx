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

        mediaRecorder.ondataavailable=(e)=>{
          chunksRef.current.push(e.data);//獎錄音片段存入數組
          condolde.log("錄音片段",e.data);
        }
        mediaRecorder.start();//開始錄音

        
      })
      //開始錄音
      .catch((err) =>{
        console.error("錯誤，使用者拒絕或者沒有麥克風",err);
      })
    
    }
    else{
      //停止錄音
    }
  },[isRecording]);
}

export default Recorder;
