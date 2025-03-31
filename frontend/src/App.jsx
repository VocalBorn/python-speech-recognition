import {useState} from 'react';
import '/./App.css'; //引入樣式檔案來設定外觀

function App() { //定義主元件APP
  //用 useState 這個 Hook 來建立一個狀態變數 isRecording，並且給它一個初始值 false
  const [isRecording,SetRecording]=useState(false); //setIsRecording：改變這個狀態的方法
  
  //當按鈕被點擊時執行的函式
  const handleClick = () =>{
    SetRecording(prev =>! prev); //當按鈕被點擊時，會將 isRecording 的值反轉
  }

  //return 這個函式會回傳一個 JSX 元素，這個元素會被渲染到畫面上

  return(
    <div className='container'>
      <h1 className='title'>語音辨識</h1>
      <button className='recor button' onclick={handleClick}>
        點我開始/結束錄音
        {isRecording ? '停止錄音' : '開始錄音'}
        <img src={isRecording ? '/./stop.png' : '/./record.png'} alt="錄音圖示" />
        {/* 根據 isRecording 的值來決定顯示的圖片 */}
        {/* 如果 isRecording 為 true，就顯示停止錄音的圖片，否則顯示開始錄音的圖片 */}
        {/* onclick={handleClick} 是一個事件處理器，當按鈕被點擊時會執行 handleClick 函式 */}
        {/* 這裡的 onClick 應該是小寫的，因為 React 對於事件名稱是區分大小寫的 */}
        {/* <img src={isRecording ? '/./stop.png' : '/./record.png'} alt="錄音圖示" /> */}
        {/* 根據 isRecording 的值來決定顯示的圖片 */}
        {/* 如果 isRecording 為 true，就顯示停止錄音的圖片，否則顯示開始錄音的圖片 */}
        {/* onclick={handleClick} 是一個事件處理器，當按鈕被點擊時會執行 handleClick 函式 */}
        {/* 這裡的 onClick 應該是小寫的，因為 React 對於事件名稱是區分大小寫的 */}
        </button> 
        
        <p className='message'>
          {isRecording ? '正在錄音' : '錄音完成'}
          {/* 根據 isRecording 的值來決定顯示的文字 */}
          {/* 如果 isRecording 為 true，就顯示「正在錄音」，否則顯示「錄音完成」 */}
        </p>
        <div className='result'>
          {/* 這裡可以放置錄音結果的顯示區域 */}
          {/* 可以根據需要添加其他內容 */}
          <h2 className='result-title'>錄音結果</h2>
          <p className='result-text'>這裡顯示錄音結果</p>
          {/* 這裡可以放置錄音結果的顯示區域 */}
          </div>
    </div>
  );
}
