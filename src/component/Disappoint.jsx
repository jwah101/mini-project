import { useState } from "react";

function Disappoint () {

  const [list, setList ] = useState([
    { content: '함께하고 싶지 않아요', count: 0 },
    { content: '매너가 좋지 않아요', count: 0 },
    { content: '분위기를 험학하게 만들어요', count: 0 },
    { content: '화를 많이내요', count: 0 },
    { content: '열심히 뛰지않아요', count: 0 },
    { content: '패스를 잘 안해요', count: 0 },
    { content: '개인적인 플레이를 해요', count: 0 },
])
    return(
      <div className="item-list">
        {
          list.map((data,i)=>{
            return(
              <>
              <div style={{margin:'5px', padding:'10px', borderBottom : '1px solid lightgray', display:'flex', justifyContent:'space-between'}} key={i}>
                {data.content}
                <span style={{cursor:'pointer'}} onClick={()=>{
                  let _list = [...list]
                  _list[i].count = _list[i].count+1;
                  setList(_list);
                }}>👎{data.count}</span>
              </div>
            </>
            )
          })
        }
      </div>
    )
}

export default Disappoint;