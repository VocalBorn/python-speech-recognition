
function RecorderButton({isRecording,onClick}){
    return(
        <button className="recorder-button" onClick={onClick}>
            {isRecording ? '停止錄音':'開始錄音'}

            <img  
            src={isRecording ? '/images/stop.png' : '/images/mic.png'}
            alt={isRecording ? '停止錄音' : '開始錄音'}
            />

            <p className="message">
                {isRecording ? '停止錄音':'錄音開始'}
            </p>
        </button>
    );
}

export default RecorderButton;