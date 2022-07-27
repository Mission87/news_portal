import React from 'react'
import Image from "../images/image1.png"
const Hero = () => {
  return (
    <>
     <div className='container mt-4'>
     <p className='h2 fw-bold'>Hot Topics</p>
     <hr/>

<div className='row container gy-2 '>
    <div className='col-lg-8 col-12 '>
<img src={Image} alt="image1" className='w-100 rounded shadow' />
    </div>






    <div className='col-lg-4 '>
        <span className='h4 fw-bold'>Nisi,</span>
<span>

 sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more
 sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more
</span>
    </div>

</div>






     </div>
    </>
  )
}

export default Hero
