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
    setFileInfo(e.target.value);
  };
  async function reviewUploadHandler () {
    await axios(
      "http://ec2-3-35-140-107.ap-northeast-2.compute.amazonaws.com:8080/review",
      {
        method: "POST",
        data: {
          data: fileInfo,
          userId : 'test',
          usertitle : 'test11',
          content : 'tt',
          region : 'tt',
          hashtags : 'tt'
        },
        headers: {
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
        <textarea maxLength="1500" rows="10" cols="50"></textarea>
      </div>
    </div>
  );
}
export default NewReview;
