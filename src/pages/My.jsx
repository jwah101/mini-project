import { useState } from 'react';
import LevelContent from '../component/LevelContent';
import './My.css'
import { useNavigate } from 'react-router-dom';
import Compliment from '../component/Compliment';
import Disappoint from '../component/Disappoint';

function My ({selectedSoccerField, setSelectedSoccerField, selectedGuest, setSelectedGuest, selectedSlot}) {
  const [tabNumber, setTabNumber] = useState(0);
  const navigate = useNavigate();



  return(
    <div className="My">
      <div className="left-menu">
        <h2>홍길동</h2>
        <div className='info'>
          <div className='manner'>
            <p>매너</p>
            <p>😄좋아요</p>
          </div>
          <div className='level'>
            <p>레벨</p>
            <p>🦾아마추어3</p>
          </div>
        </div>
        <div className='levelguide'>
          <h4>🦾전체 레벨 가이드</h4>
          <div className="tabs">
            <div className="tab" onClick={()=>{
              setTabNumber(0);
            }}>루키</div>
            <div className="tab" onClick={()=>{
              setTabNumber(1);
            }}>비기너</div>
            <div className="tab" onClick={()=>{
              setTabNumber(2);
            }}>아마추어</div>
            <div className="tab" onClick={()=>{
              setTabNumber(3);
            }}>세미프로</div>
          </div>
          <div className='levelcontent'>
            <LevelContent tabNumber={tabNumber}/>
          </div>
        </div>
      </div>


        <div className='match-list'>
          <div className='apply-match'>
            <h4>신청한 경기</h4>
            {
            selectedSoccerField.length > 0 ?(
                selectedSoccerField.map((data, i)=>{
                  const slot = selectedSlot[i]
                  return(
                    <div key={i}>
                      <span style={{cursor:'pointer'}} onClick={()=>{
                      navigate('/detail/'+ data.soccerField.id)}}>
                        구장명 : {data.soccerField.name}</span>
                      <span>시간 : {slot.selectedTime}</span>
                      <button className='cancel-btn' onClick={()=>{
                        let _selectedSoccerField = [...selectedSoccerField]
                        _selectedSoccerField.splice(i,1)
                        setSelectedSoccerField(_selectedSoccerField)
                        alert('취소 완료되었습니다.')
                      }}>취소</button>
                    </div>
                  )
                })
              ):
              (
                <span>신청한 경기가 없습니다.</span>
              )
            }
          </div>

            <div className='guestapply-match'>
              <h4>용병으로 신청한 경기</h4>
               {selectedGuest.length > 0 ?(
                selectedGuest.map((data, i)=>{
                  return(
                    <div key={i}>
                      <span>구장 명 : {data.soccerField}</span>
                      <span> 시간 : {data.matchTime}</span>
                      <button className='cancel-btn' onClick={()=>{
                        let _selectedGuest = [...selectedGuest]
                        _selectedGuest.splice(i,1)
                        setSelectedGuest(_selectedGuest)
                        alert('취소 완료되었습니다.')
                      }}>취소</button>
                    </div>
                    
                  )
                })
            ):
            (
              <span>용병으로 신청한 경기가 없습니다.</span>
            )
            }
            </div>
            <div className='compliment'>
              <h4>😀칭찬해요</h4>
              <p><Compliment /></p>
            </div>
            <div className='disappoint'>
                <h4>😥아쉬워요</h4>
                <p><Disappoint /></p>
            </div>
         </div>
    </div>
    
  )
}

export default My;