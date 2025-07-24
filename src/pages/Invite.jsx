import { useState } from 'react'
import './Invite.css'

function Invite({guestInvite, setGuestInvite}) {


  const [newTeamName , setNewTeamName] = useState('');
  const [newFieldName , setNewFieldName] = useState('');
  const [newPeopleCount , setNewPeopleCount] = useState('');
  const [newEtc , setNewEtc] = useState('');

  return (
    <div className="Invite">
      <h1>용병 모집</h1>
      *정보를 입력해주세요.*
      <form action="">
        <div className='input-box'>
          <p>팀 이름</p>
         <input type="text" placeholder='ex)FC서울' value={newTeamName} onChange={(e)=>{
          setNewTeamName(e.target.value)
         }}/>
        </div>
        <div className='input-box'>
          <p>구장 명</p>
          <input type="text" placeholder='ex)XX운동장/축구장' value={newFieldName} onChange={(e)=>{
          setNewFieldName(e.target.value)
          }}/>
        </div>
        <div className='input-box'>
          <p>필요 인원수</p>
         <input type="text"  placeholder='숫자만 적어주세요' value={newPeopleCount} onChange={(e)=>{
          setNewPeopleCount(e.target.value)
         }}/>
        </div>
        <div className='input-box'>
          <p>기타 특이사항</p>
          <textarea className='textarea' value={newEtc} onChange={(e)=>{
            setNewEtc(e.target.value);
          }}>
          </textarea>
        </div>
      </form>
      <button className='btn1' onClick={()=>{
        let _guestInvite = [...guestInvite];
         _guestInvite.push({
          teamName : newTeamName, 
          fieldName : newFieldName, 
          peopleCount : newPeopleCount, 
          etc : newEtc
        });
        setGuestInvite(_guestInvite);
        alert('신청이 완료되었습니다.')
        setNewTeamName('');
        setNewFieldName('');
        setNewPeopleCount('');
        setNewEtc('');
      }}>모집 신청</button>
    </div>
  )
}
export default Invite;