import '../styles/Signup.css';
import React, { useState } from 'react';
import axios from 'axios';

function Signup() {

    const [userinfo, setuserinfo] = useState({
        email: '',
        password: '',
        username: '',
        nickname: '',
        birthday: Date.now()
      });
    const handleInputValue = (key) => (e) => {
        setuserinfo({ ...userinfo, [key]: e.target.value });
      };  

    async function transfortForm(){
        console.log({
            "email" :  userinfo.email,
            "password" : userinfo.password,
            "username" : userinfo.username,
            "nickname" : userinfo.nickname,
            "birthday" : userinfo.birthday
        })
        const response = await axios.post('http://ec2-3-35-140-107.ap-northeast-2.compute.amazonaws.com:8080/signup', {
            "email" :  userinfo.email,
            "password" : userinfo.password,
            "nickname" : userinfo.username
        })
    }
    return (
        <div id="container">
            <div id="content">
                <div class="row_group">
                    <h3>
                        <label for="email">이메일</label>
                    </h3>
                    <span class="input_box">
                        <input type="text" id="email" class="int" onChange={handleInputValue('email')}></input>
                    </span>
                    <h3>
                      <label for="password">비밀번호</label>
                    </h3>
                    <span class="input_box">
                        <input type="text" id="password" class="int" onChange={handleInputValue('password')}></input>
                    </span>
                    <h3>
                      <label for="password_check">비밀번호 재확인</label>
                    </h3>
                    <span class="input_box">
                        <input type="text" id="password_check" class="int" ></input>
                    </span>
                </div>
                <div class="row_group">
                    <h3>
                      <label for="name">이름</label>
                    </h3>
                    <span class="input_box">
                        <input type="text" id="name" class="int" onChange={handleInputValue('username')}></input>
                    </span>
                    <h3>
                        <label for="nickname">닉네임</label>
                    </h3>
                    <span class="input_box">
                        <input type="text" id="nickname" class="int" onChange={handleInputValue('nickname')}></input>
                    </span>
                    <h3>생년월일</h3>
                    <span class="input_box">
                    <input type="date" name="bday" required pattern="\d{4}-\d{2}-\d{2}" placeholder="#### / ## / ##" onChange={handleInputValue('birthday')}/>
                    </span>
                </div>
            </div>
            <button onClick={transfortForm}>회원 가입</button>
        </div>
        
    );
}
export default Signup;
  