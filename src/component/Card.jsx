import { useNavigate } from "react-router-dom";

function Card ({data}) {
  const navigate = useNavigate();


  return(
          <div className='col-md-4' onClick={()=>{
            navigate('/detail/'+ data.id )
          }}>
            {/* 기본 경로로 이미지 불러오기 */}
            <img src={`/img/${data.name}.jpg`} alt="" width='80%' height='200px'/>
            <h4>{data.name}</h4>
            <p>{data.address}</p>
          </div>
  )
}

export default Card;