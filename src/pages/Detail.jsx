import { useParams } from "react-router-dom"
import './Detail.css'
import TabContent from "../component/TabContent";
import { useState } from "react";


function Detail ({soccerField}) {
const{id} = useParams();

const selectedField = soccerField[id];
const [like, setLike] = useState(0);
const [tabNumber, setTabNumber] = useState(0);



  if(!selectedField) {
    return <div>해당 구장이 존재하지 않습니다.</div>
  }


 return (
  <div className="container">
    <div>
      <img src={`/img/${soccerField[id].name}.jpg`} alt=""  width='100%' height='400px'/>
    </div>
    <div style={{display:'flex', justifyContent:'space-between'}}>
      <div className="left-menu">
        <div className="tabs">
          <div className="tab" onClick={()=>{
            setTabNumber(0);
          }}>구장 정보</div>
          <div className="tab" onClick={()=>{
            setTabNumber(1);
          }}>매치 방식</div>
          <div className="tab" onClick={()=>{
            setTabNumber(2);
          }}>환불 규정</div>
        </div>
        <div className="tab-content">
        <TabContent tabNumber={tabNumber} />
        </div>
      </div>

      <div className="right-menu">
          <div className="content">
            <h4>{soccerField[id].name}</h4>
            <p>{'주소 : '+soccerField[id].address}</p>
            <p>{'가격: '+soccerField[id].price+'원'}</p>
        </div>
        <div className="btn-wrapper">
          <button className="btn1" onClick={()=>{alert('신청 완료했습니다.')}}>신청하기</button>
          <button className="btn2" onClick={()=>{
            setLike(like+1);
          }}>❤</button> {like}
        </div>
      </div>
   </div>
  </div>
 )
}

export default Detail;