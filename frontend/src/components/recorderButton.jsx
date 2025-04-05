
function RecorderButton({isRecording,onClick}){
    return(
        <button className="recorder-button" onClick={onClick}>
            {isRecording ? '停止錄音':'開始錄音'}

            <img  
            src={isRecording ? '/images/stop.png' : '/images/mic.png'}
            alt={isRecording ? '停止錄音' : '開始錄音'}
            />

            <span className="recorder-button-text">
                {isRecording ? '停止錄音':'開始錄音'}</span>
            <p className="message">
                {isRecording ? '停止錄音':'錄音開始'}
            </p>
        </button>
    );
}

export default RecorderButton;