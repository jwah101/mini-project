import Card from "../component/Card";
import Carousel from "../component/Carousel";

function MainPage ({soccerField}) {

  return(
    <>
      <div className="banner"> <Carousel/> </div>
      <div style={{textAlign:'center'}}><h2>구장 목록</h2>*원하시는 구장을 선택해주세요.*</div>
      <div className='container mt-4' style={{cursor:"pointer"}}>
        <div className="row">
           {
             soccerField.map((data, i)=>{
               return(
                 <Card data={data} key={i}/>
               )
            })
           }
         </div>
     </div>

    </>

  )

}

export default MainPage;