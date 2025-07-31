import { useState } from "react";

function Compliment () {

  const [list, setList ] = useState([
    { content: '다음에도 같이 차고 싶어요', count: 0 },
    { content: '매너가 좋아요', count: 0 },
    { content: '분위기를 좋게 만들어요', count: 0 },
    { content: '칭찬을 많이해요', count: 0 },
    { content: '열심히 뛰어요', count: 0 },
    { content: '패스를 잘해요', count: 0 },
    { content: '이타적인 플레이를 해요', count: 0 },
])
    return(
      <div className="item-list">
        {
          list.map((data,i)=>{
            return(
              <div key={i} style={{margin:'5px', padding:'10px', borderBottom : '1px solid lightgray', display:'flex', justifyContent:'space-between'}}>
                {data.content}
                <span style={{cursor:'pointer'}} onClick={()=>{
                  let _list = [...list]
                  _list[i].count = _list[i].count+1;
                  setList(_list);
                }}>👍{data.count}</span>
              </div>
            )
          })
        }
      </div>
    )
}

export default Compliment;