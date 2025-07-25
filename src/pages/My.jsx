import { useState } from 'react';
import LevelContent from '../component/LevelContent';
import './My.css'

function My ({selectedSoccerField}) {
  const [tabNumber, setTabNumber] = useState();



  return(

    <div className="My">
      <div className="left-menu">
        <h2>김현태</h2>
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
          <h4>전체 레벨 가이드</h4>
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
            <h5>신청한 경기</h5>
            {selectedSoccerField.length > 0 ?(
                selectedSoccerField.map((data, i)=>{
                  return(
                    <p key={i}>{data.soccerField}</p>
                  )
                })

            ):
            (
              <p>신청한 경기가 없습니다.</p>
            )
            }
          </div>
            <div className='guestapply-match'>
              <h5>용병으로 신청한 경기</h5>
              <p>신천한 경기가 없습니다.</p>
            </div>
         </div>
    </div>
    
  )
}

export default My;