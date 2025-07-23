import { useNavigate } from "react-router-dom";

function Header () {

  const navigate = useNavigate();
  
  return(

<nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" style={{cursor:'pointer'}} onClick={()=>{navigate('/')}}>Home</a>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" style={{cursor:'pointer'}}>용병 모집</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active"  style={{cursor:'pointer'}}>😀MY</a>
      </li>
    </ul>
    <form className="d-flex" role="search">
      <input className="form-control me-4" type="search" placeholder="구장이나 지역으로 찾기" style={{fontSize:"16px"}} aria-label="Search" />
      <button className="btn btn-outline-success" type="submit" style={{width:"100px"}}>찾기</button>
    </form>
  </div>
</div>
</nav>
  )
}

export default Header;