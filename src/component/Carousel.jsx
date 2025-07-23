import './carousel.css'


function Carousel () {
  return(
   <div className='wrapper'> 
    <div className="carousel">
      <div className="slide">
        <img src='./public/bg/1.png' alt=""/>
      </div>
      <div className="slide">
        <img src='./public/bg/2.png' alt=""/>
      </div>
      <div className="slide">
        <img src='./public/bg/3.png' alt=""/>
      </div>
    </div>
    <button onClick={()=>{
    }}>⬅</button> <button>➡</button>
  </div>
  )
}

export default Carousel;