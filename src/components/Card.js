import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


const Card = (props) => {
  return (
    <><div data-aos="flip-left" className='col-lg-4 col-md-6 col-12'>
      <div className="card w-100" >
  <img src={props.image} className="card-img-top" alt={props.image} />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="dfsafdadf" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

</div>
    </>
  )
}

export default Card
