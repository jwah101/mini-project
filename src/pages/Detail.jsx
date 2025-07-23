import { useParams } from "react-router-dom"



function Detail ({soccerField}) {
const{id} = useParams();

const selectedField = soccerField[id];

  if(!selectedField) {
    return <div>해당 구장이 존재하지 않습니다.</div>
  }


 return (
  <div className="container">
    <div className="left-menu">

    </div>
    <div className="right-menu" style={{width:'50%'}}>
      <div>
        <div className="col-md-6">
          <img src={`/img/${soccerField[id].name}.jpg`} alt=""  width='400px' height='400px'/>
        </div>
        <div className="col-md-6">
          <h4>{soccerField[id].name}</h4>
          <p>{'주소 : '+soccerField[id].address}</p>
          <p>{'가격: '+soccerField[id].price+'원'}</p>
        </div>
      </div>
      <button>신청하기</button>
    </div>

  </div>
 )
}

export default Detail;