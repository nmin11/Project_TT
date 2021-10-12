import { useState } from "react";
import axios from "axios";

function NewReview() {
  const [fileInfo, setFileInfo] = useState("");
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
    </div>
  );
}
export default NewReview;

//ckeditor 이미지 업로드 문제로 미뤄둠
// ClassicEditor.create(document.querySelector("#editor"), {
//     plugins: [SimpleUploadAdapter],
//     simpleUpload: {
//       uploadUrl:
//         "http://ec2-3-35-140-107.ap-northeast-2.compute.amazonaws.com:8080/duplication-check",
//       withCredentials: true,
//       headers: {
//         "Access-Control-Allow-Headers": "Content-Type",
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "POST",
//         "Access-Control-Allow-Credentials": "true",
//       },
//     },
//   }).then(console.log('성공')).catch(console.log('실패'));
//   return (
//     <div>
//       <div>테스트</div>
//       <CKEditor
//         editor={ClassicEditor}
//         data="<p>Hello from CKEditor 5!</p>"
//         onReady={(editor) => {
//           // You can store the "editor" and use when it is needed.
//           console.log("Editor is ready to use!", editor);
//         }}
//         onChange={(event, editor) => {
//           const data = editor.getData();
//           console.log({ event, editor, data });
//         }}
//         onBlur={(event, editor) => {
//           console.log("Blur.", editor);
//         }}
//         onFocus={(event, editor) => {
//           console.log("Focus.", editor);
//         }}
//       />
//     </div>
