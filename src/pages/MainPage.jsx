import Card from "../component/Card";
import Carousel from "../component/Carousel";

function MainPage ({soccerField}) {

  return(
    <>
      <div className="banner"> <Carousel/> </div>
      <div className='container mt-4'>
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