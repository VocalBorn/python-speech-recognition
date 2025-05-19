import { useEffect, useRef, useState } from 'react';
import { uploadAudio } from '../utils/uploadAudio.js'; // 上傳音訊的函式

export function useAudioRecorder(isRecording) {
  const mediaRecorderRef = useRef(null); // MediaRecorder 實例
  const chunksRef = useRef([]);          // 暫存錄音資料
  const [audioURL, setAudioURL] = useState(null); // 最後產生的音訊 URL
  const [error, setError] = useState(null);       // 錯誤處理

  useEffect(() => {
    let stream = null;

    // 啟動錄音
    const startRecording = async () => {
      try {
        console.log('[Recorder] 嘗試取得麥克風存取權');
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });

        console.log('[Recorder] 已取得麥克風');
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        // 收集音訊資料
        mediaRecorder.ondataavailable = (e) => {
          console.log('[Recorder] 收到音訊資料區塊');
          chunksRef.current.push(e.data);
        };

        // 錄音停止時的處理
        mediaRecorder.onstop = () => {
          console.log('[Recorder] 錄音已停止，正在產生 URL');
          const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
          const url = URL.createObjectURL(blob);
          setAudioURL(url);
          chunksRef.current = [];

          // 停止所有音訊 tracks
          stream.getTracks().forEach((track) => {
            track.stop();
          });

          console.log('[Recorder] 音訊 URL 已產生:', url);

          try {
            uploadAudio(blob);  // ✅ 正確位置
          } catch (e) {
            console.error("上傳錯誤", e);
          }
        };

        

        // 開始錄音
        mediaRecorder.start();
        console.log('[Recorder] 錄音開始');
      } catch (err) {
        console.error('[Recorder] 麥克風存取錯誤:', err);
        setError(err);
      }
    };

      // 停止錄音
      const stopRecording = () => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        console.log('[Recorder] 停止錄音');
        mediaRecorderRef.current.stop();
      }
      };

      
      

      // 根據 isRecording 控制開始或停止
      if (isRecording) {
        startRecording();
      } else {
        stopRecording();
      }

      // 清理：unmount 時停止錄音
      return () => {
        console.log('[Recorder] 組件卸載，強制停止錄音');
        stopRecording();
      };
    }, [isRecording]);

  return { audioURL, error };
}
