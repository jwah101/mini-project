import { useParams } from "react-router-dom"
import './Detail.css'
import TabContent from "../component/TabContent";
import { useState } from "react";


function Detail ({soccerField, selectedSoccerField ,setSelectdeSoccerField}) {
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
          <p>이용 가능한 시간</p>
          <div className="apply-time">
            <div className="disabled">08:00~10:00</div>
            <div className="disabled">10:00~12:00</div>
            <div className="disabled">12:00~14:00</div>
            <div className="disabled">14:00~16:00</div>
            <div className="disabled">16:00~18:00</div>
            <div className="disabled">18:00~20:00</div>
            <div className="abled" onClick={()=>{
            }}>20:00~22:00</div>
            <div className="disabled">22:00~24:00</div>
          </div>
        <div className="btn-wrapper">
          {/* 클릭시 축구장 이름 저장 */}
          <button className="btn1" onClick={()=>{
            let _selectedSoccerField = [...selectedSoccerField]
            _selectedSoccerField.push({
              soccerField : soccerField[id].name
            })
            setSelectdeSoccerField(_selectedSoccerField);
            alert('신청 완료했습니다.')
            }}>신청하기</button>
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