import React from 'react'
import RSkeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Skelaton = () => {
  return (
    <>
     <h1> asdfas </h1>
     <div data-aos="flip-left" className='col-lg-4 col-md-6 col-12'>
      <div className="w-100" >
       
      
    <h1>
    <RSkeleton /> 
    </h1>
    <h6>
    <RSkeleton count={5} /> 
    </h6>

</div>
</div>
    </>
  )
}

export default Skelaton
