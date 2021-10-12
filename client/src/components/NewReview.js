import { useState } from "react";
import axios from "axios";

function NewReview() {
  const [fileInfo, setFileInfo] = useState("");
  const [reviewData, setReviewData] = useState({
    usertitle : "",
    content: "",
    region: "",
    hashtags: "",
  });

  const fileChangeHandler = (e) => {
    setFileInfo(e.target.files[0]);
  };
  const reviewDataHandler = (key) => (e) => {
    setReviewData({ ...reviewData, [key]: e.target.value })
  }
  async function reviewUploadHandler () {
    const fd = new FormData();
    fd.append('image', fileInfo, fileInfo.name)
    console.log(fd.getAll('image'))
    await axios(
      "http://ec2-3-35-140-107.ap-northeast-2.compute.amazonaws.com:8080/review",
      {
        method: "POST",
        data: {
          data: fd,
          userId : 'test',
          usertitle : 'test11',
          content : 'tt',
          region : 'tt',
          hashtags : 'tt'
        },
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Credentials": "true",
        },
        withCredentials: true,
      }
    );
  };
  return (
    <div>
      <div>
        <input type="file" onChange={fileChangeHandler} />
        <button onClick={reviewUploadHandler}>글쓰기</button>
      </div>
      <div>
        <textarea maxLength="1500" rows="10" cols="50" onChange={reviewDataHandler('content')}></textarea>
      </div>
    </div>
  );
}
export default NewReview;
