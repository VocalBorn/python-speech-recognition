export const uploadAudio = async (audioBlob) => {
    const formData = new FormData();
    formData.append("file", audioBlob, "recording.webm");
  
    try {
      const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      console.log("[Uploader] 上傳成功:", data);
    } catch (err) {
      console.error("[Uploader] 上傳失敗:", err);
    }
  };
  