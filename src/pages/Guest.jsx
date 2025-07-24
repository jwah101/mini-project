import { use, useState } from "react";
import { Table } from "react-bootstrap";

function Guest ({guestInvite}) {

  
  return(
    <Table style={{marginTop:'60px'}}>
      <thead>
        <tr>
          <th>팀 이름</th>
          <th>구장 명</th>
          <th>필요 인원수 </th>
          <th>기타 특이사항</th>
          <th>신청하기</th>
        </tr>
      </thead>
      <tbody>
        {guestInvite.map((data,i)=>{
          return(
            <tr key={i}>
              <td>{data.teamName}</td>
              <td>{data.fieldName}</td>
              <td>{data.peopleCount}</td>
              <td>{data.etc}</td>
              <td><button className="btn3" onClick={()=>{
                alert('신청 완료했습니다.')
              }}>신청</button></td>
            </tr>
              )
        })}
      </tbody>
    </Table>
  )
}
export default Guest;