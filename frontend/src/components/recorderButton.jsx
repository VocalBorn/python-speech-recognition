
function RecorderButton({isRecording,onClick}){
    return(
        <button className="recorder-button" onClick={onClick}>
            {isRecording ? '停止錄音':'開始錄音'}

            <img  
            src={isRecording ? '/images/stop.png' : '/images/mic.png'}
            alt={isRecording ? '停止錄音' : '開始錄音'}
            />
        </button>
    );
}

export default RecorderButton;