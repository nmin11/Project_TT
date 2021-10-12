import { useState } from "react";
import axios from "axios";
import AWS from "aws-sdk"

axios.defaults.withCredentials = true;

function NewReview() {
  const [fileInfo, setFileInfo] = useState("");
  const [reviewData, setReviewData] = useState({
    usertitle : "",
    content: "",
    region: "",
    hashtags: "",
  });

  AWS.config.update({
    region: "ap-northeast-2", 
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: "ap-northeast-2:c73b0ffb-7106-4208-b363-d97260804331", // cognito 인증 풀에서 받아온 키를 문자열로 입력합니다. (Ex. "ap-northeast-2...")
    }),
  })

  const upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: "projecttt-image-bucket", // 업로드할 대상 버킷명
      Key: fileInfo.name, // 업로드할 파일명 (* 확장자를 추가해야 합니다!)
      Body: fileInfo, // 업로드할 파일 객체
    },
  })

  const fileChangeHandler = (e) => {
    setFileInfo(e.target.files[0]);
  };
  const reviewDataHandler = (key) => (e) => {
    setReviewData({ ...reviewData, [key]: e.target.value })
  }
  async function reviewUploadHandler () {
    const fd = new FormData();
    fd.append('image', fileInfo, fileInfo.name)
    const promise = upload.promise()
    promise.then(
      function (data) {
        alert("이미지 업로드에 성공했습니다.")
      },
      function (err) {
        return alert("오류가 발생했습니다: ", err.message)
      })
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
