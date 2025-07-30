import { useNavigate } from "react-router-dom";
import './Header.css'

function Header ({searchData, setSearchData}) {

  const navigate = useNavigate();

  return(

<nav className="navbar navbar-expand-lg bg-body-tertiary" style={{position:'absolute',position:'fixed', top:0, width:'100%', zIndex:'999'}}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" onClick={()=>{navigate('/')}}>⚽축구는 인생</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" onClick={()=>{navigate('/invite')}} style={{cursor:'pointer'}}>용병 모집</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" onClick={()=>{navigate('/guest')}} style={{cursor:'pointer'}}>용병 신청</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active"  onClick={()=>(navigate('/my'))} style={{cursor:'pointer'}}>😀MY</a>
        </li>
      </ul>
        <form className="d-flex" role="search" >
          <a className="nav-link active"  style={{cursor:'pointer'}} onClick={()=>(navigate('/login'))}>로그인</a>
          <input className="form-control me-4" 
            type="search" 
            placeholder="구장이나 지역으로 찾기" 
            style={{fontSize:"16px"}} 
            aria-label="Search" 
            value={searchData}
            onChange={(e)=>{
            setSearchData(e.target.value)
          }}
          />
          <button 
            className="btn btn-outline-success" 
            type="submit" 
            style={{width:"100px"}}
            onClick={(e)=>{
            e.preventDefault();
            navigate('/search')}}
            >찾기</button>
        </form>
    </div>
  </div>
</nav>
  )
}

export default Header;