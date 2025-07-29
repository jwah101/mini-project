import './Login.css';
function Login () {

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      alert('이메일과 비밀번호를 모두 입력해주세요.');
    } else {
      alert(`로그인 완료`);
    }
  };

  return(
    <div className="login-container">
      <h2>⚽ 축구는 인생</h2>
      <form onSubmit={handleLogin} className="login-form">
        <label>
          이메일
          <input
            type="email"
            placeholder="example@email.com"
          />
        </label>
        <label>
          비밀번호
          <input
            type="password"
            placeholder="비밀번호"
          />
        </label>
        <button className="bt1" type="submit">이메일로 로그인</button>
        <button className="bt2" type="submit">카카오로 로그인</button>
      </form>
      <p className="register-text">
        계정이 없으신가요? <a href="/register">회원가입</a>
      </p>
    </div>
  );
}

export default Login;