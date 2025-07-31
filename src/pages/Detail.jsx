import { useParams } from "react-router-dom"
import './Detail.css'
import TabContent from "../component/TabContent";
import { useState } from "react";


function Detail ({soccerField, selectedSoccerField ,setSelectedSoccerField, setSelectedSlot, selectedSlot, selectedDate, setSelectedDate}) {
const{id} = useParams();

const [like, setLike] = useState(0);
const [tabNumber, setTabNumber] = useState(0);
const timeSlots = [
    "08:00~10:00",
    "10:00~12:00",
    "12:00~14:00",
    "14:00~16:00",
    "16:00~18:00",
    "18:00~20:00",
    "20:00~22:00",
    "22:00~24:00"
  ];
const [timeIndex, setTimeIndex] = useState();


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
            <p><b>{selectedDate.month+1}월 {selectedDate.date}일 {selectedDate.dayLabel}요일</b></p>
            <h4>{soccerField[id].name}</h4>
            <p>{'주소 : '+soccerField[id].address}</p>
            <p>{'가격: '+soccerField[id].price+'원'}</p>
        </div>

          <p>이용 가능한 시간</p>
          <div className="apply-time">
              {
               timeSlots.map ((slot, i)=>{
                return(
                  <div key={i} onClick={()=>{
                    setTimeIndex(i) // 선택시 해당 배열방의 시간이 선택
                  }}
                    className={timeIndex === i ? 'time-slot selected' : 'time-slot' }
                  >
                  {slot}
                  </div>
                )
               }) 
              }
            </div>
        <div className="btn-wrapper">
          {/* 클릭시 축구장 이름 저장 */}
          <button className="btn1" onClick={()=>{
            if(timeIndex === undefined) {
              alert('시간을 선택해주세요.')
              return;
            }
            let _selectedSoccerField = [...selectedSoccerField]
            _selectedSoccerField.push({
              soccerField : soccerField[id],
                reservedDate: {
                  month: selectedDate.month,
                  date: selectedDate.date,
                  dayLabel: selectedDate.dayLabel
               }
            })
            let _selectedSlot = [...selectedSlot]
            _selectedSlot.push({
              selectedTime : timeSlots[timeIndex]
            })
            setSelectedSlot(_selectedSlot);
            setSelectedSoccerField(_selectedSoccerField);
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