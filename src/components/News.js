import React from 'react'
import Card from './Card'
import Image from "../images/image1.png"
const News = () => {
  return (
    <div className='container mt-5'>
          <p className='h2 fw-bold'>latest News</p>
     <hr/>



<div className='row gy-4 gx-4 container mx-auto'>

    <Card image={Image}/>
    <Card image={Image}/>
    <Card image={Image}/>
    <Card image={Image}/>
    <Card image={Image}/>
    <Card image={Image}/>
     </div>






    </div>
  )
}

export default News
