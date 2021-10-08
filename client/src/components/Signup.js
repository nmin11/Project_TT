import '../styles/Signup.css';
function Signup() {
    return (
        <div id="container">
            <div id="content">
                <div class="row_group">
                    <h3>
                        <label for="email">이메일</label>
                    </h3>
                    <span class="input_box">
                        <input type="text" id="email" class="int"></input>
                    </span>
                    <h3>
                      <label for="password">비밀번호</label>
                    </h3>
                    <span class="input_box">
                        <input type="text" id="password" class="int"></input>
                    </span>
                    <h3>
                      <label for="password_check">비밀번호 재확인</label>
                    </h3>
                    <span class="input_box">
                        <input type="text" id="password_check" class="int"></input>
                    </span>
                </div>
                <div class="row_group">
                    <h3>
                      <label for="name">이름</label>
                    </h3>
                    <span class="input_box">
                        <input type="text" id="name" class="int"></input>
                    </span>
                    <h3>
                        <label for="nickname">닉네임</label>
                    </h3>
                    <span class="input_box">
                        <input type="text" id="nickname" class="int"></input>
                    </span>
                    <h3>생년월일</h3>
                    <span class="input_box">
                    <input type="date" name="bday" required pattern="\d{4}-\d{2}-\d{2}" placeholder="#### / ## / ##"/>
                    </span>
                </div>
                <div class="row_group">
                    <h3>휴대전화</h3>
                    <span class="input_box">
                        <input type="text"></input>
                    </span>
                </div>
            </div>
        </div>
        
    );
}
export default Signup;
  