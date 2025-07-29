import { useNavigate } from 'react-router-dom';
import './Register.css';
function Register () {
  const navigate = useNavigate();

  return(
     <div className="register-container">
      <h2>⚽ 축구는 인생</h2>
      <form className="register-form">
        <label>
          이메일
          <input
            type="email"
            placeholder="example@email.com"
            required
          />
        </label>
        <label>
          닉네임
          <input
            type="text"
            placeholder="닉네임"
            required
          />
        </label>
        <label>
          비밀번호
          <input
            type="password"
            placeholder="비밀번호"
            required
          />
        </label>
        <label>
          비밀번호 확인
          <input
            type="password"
            placeholder="비밀번호 확인"
            required
          />
        </label>
        <button type="submit">회원가입</button>
      </form>
      <p className="login-text">
        이미 계정이 있으신가요?  <span onClick={()=>(navigate('/login'))}>로그인</span>
      </p>
    </div>
  )
}

export default Register;