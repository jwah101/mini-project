import { Table } from "react-bootstrap";

function Guest ({guestInvite, selectedGuest, setSelectedGuest}) {

  
  return(
    <Table style={{textAlign:'center' , marginTop:'80px'}}>
      <thead>
        <tr>
          <th>팀 이름</th>
          <th>구장 명</th>
          <th>경기 시간</th>
          <th>기타 특이사항</th>
          <th>신청하기</th>
        </tr>
      </thead>
      <tbody>
        {guestInvite.length > 0 ? (
           guestInvite.map((data,i)=>{
             return(
              <tr key={i}>
              <td>{data.teamName}</td>
              <td>{data.fieldName}</td>
              <td>{data.matchTime}</td>
              <td>{data.etc}</td>
              <td><button className="btn3" onClick={()=>{
                let _selectedGuest = [...selectedGuest]
                _selectedGuest.push ({
                  soccerField : data.fieldName,
                  matchTime : data.matchTime
                }) 
                setSelectedGuest(_selectedGuest);
                alert('신청 완료했습니다.')
              }}>신청</button></td>
              </tr>
                )
              })

         ) :
        (
          <tr>
            <td colSpan="5" style={{ textAlign: 'center' }}>
              현재 등록된 경기가 없습니다.
            </td>
          </tr>
         )}
      </tbody>
    </Table>
  )
}
export default Guest;