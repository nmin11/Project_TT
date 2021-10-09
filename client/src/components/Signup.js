import "../styles/Signup.css";
import React, { useState } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

function Signup() {
  const [userinfo, setuserinfo] = useState({
    email: "",
    password: "",
    username: "",
    nickname: "",
    birthday: Date.now(),
  });
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };

  // 회원가입 POST 요청
  async function transfortForm() {
    //모든필드의 값이 null이 아니어야 함.
    if (
      userinfo.email === "" ||
      userinfo.password === "" ||
      userinfo.username === "" ||
      userinfo.nickname === "" ||
      userinfo.birthday === ""
    ) {
      setErrorMessage("모든 내용을 작성해 주세요");
      return null;
    }
    setErrorMessage("");
    console.log({
      email: userinfo.email,
      password: userinfo.password,
      username: userinfo.username,
      nickname: userinfo.nickname,
      birthday: userinfo.birthday,
    });

    // const response = await axios.post(
    //   "http://ec2-3-35-140-107.ap-northeast-2.compute.amazonaws.com:8080/signup",
    //   {
    //     email: userinfo.email,
    //     password: userinfo.password,
    //     nickname: userinfo.username,
    //   }
    // );
    await axios('http://ec2-3-35-140-107.ap-northeast-2.compute.amazonaws.com:8080/signup', {
      method: 'POST',
      data: {
            email: userinfo.email,
            password: userinfo.password,
            nickname: userinfo.username,
          },
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': 'https://localhost:3000',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Credentials': true,
      },
    })
  }

  const checkingPassword = (e) => {
    console.log(e.target.value);
    if (userinfo.password !== e.target.value) {
      setErrorMessage("비밀번호가 일치하지 않습니다");
    } else {
      setErrorMessage("");
    }
  };
  //POST요청으로 중복 아이디 찾기
  const idValidationCheck = (e) => {
    console.log("이벤트 발생");
  };
  return (
    <div id="container">
      <div id="content">
        <div class="row_group">
          <h3>
            <label for="email">이메일</label>
          </h3>
          <span class="input_box">
            <input
              type="text"
              id="email"
              class="int"
              onChange={handleInputValue("email")}
            ></input>
          </span>
          {<div>사용 가능한 아이디입니다.</div>}
          <h3>
            <label for="password">비밀번호</label>
          </h3>
          <span class="input_box">
            <input
              type="text"
              id="password"
              class="int"
              type="password"
              onBlur={idValidationCheck}
              onChange={handleInputValue("password")}
            ></input>
          </span>
          <h3>
            <label for="password_check">비밀번호 재확인</label>
          </h3>

          <span class="input_box">
            <input
              type="text"
              id="password_check"
              type="password"
              class="int"
              onChange={checkingPassword}
            ></input>
          </span>
        </div>
        <div class="row_group">
          <h3>
            <label for="name">이름</label>
          </h3>
          <span class="input_box">
            <input
              type="text"
              id="name"
              class="int"
              onChange={handleInputValue("username")}
            ></input>
          </span>
          <h3>
            <label for="nickname">닉네임</label>
          </h3>
          <span class="input_box">
            <input
              type="text"
              id="nickname"
              class="int"
              onChange={handleInputValue("nickname")}
            ></input>
          </span>
          <h3>생년월일</h3>
          <span class="input_box">
            <input
              type="date"
              name="bday"
              required
              pattern="\d{4}-\d{2}-\d{2}"
              placeholder="#### / ## / ##"
              onChange={handleInputValue("birthday")}
            />
          </span>
        </div>
      </div>
      <button onClick={transfortForm}>회원 가입</button>
      {errorMessage === "" ? null : (
        <div className="alert-box">{errorMessage}</div>
      )}
    </div>
  );
}
export default Signup;
