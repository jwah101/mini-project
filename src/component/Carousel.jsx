import './Carousel.css'
function Carousel () {
  return(
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/bg/1.PNG" className="d-block w-100" alt="1"/>
        </div>
        <div className="carousel-item">
          <img src="/bg/2.png" className="d-block w-100" alt="2"/>
        </div>
        <div className="carousel-item">
          <img src="/bg/3.PNG" className="d-block w-100" alt="3"/>
        </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>
    </div>
  )
}
export default Carousel;