import { useNavigate } from 'react-router-dom';
import './Footer.css'

function Footer () {
  const navigate = useNavigate();
  return(
    <div className="Footer">
      <div className='content'>
        <h1>축구는 인생</h1>
        <ul>
          <li onClick={()=>{navigate('/policy')}}>이용약관</li>
          <li onClick={()=>{navigate('/privacy')}}>개인정보 처리 방침</li>
          <li onClick={()=>{navigate('/introduce')}}>소개</li>
        </ul>
        <p>축구는 인생 | 서울 강동구 천호대로157길 14 나비빌딩 8층 | 02-123-4567</p>
        <p>대표 메일 contact@naver.com</p>
        <p>마케팅 제안 marketing@naver.com</p>
        <p>언론, 연구 team@naver.com</p>
        <p>주식회사 축구는인생 | 사업자번호 123-456-789 | 대표 홍길동 |</p>
        <p>Copyright © Myplaycompany All Rights Reserved.</p>
      </div>
    </div>
  )
  
}

export default Footer;