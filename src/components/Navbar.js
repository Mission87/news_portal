import React from 'react'
import { BsSearch, BsList } from "react-icons/bs";
import Sidenav from './Sidenav';
// BsSearch
const Navbar = () => {
  return (
    <div>
      
<nav className='mt-4 row container mx-auto'>

<div className='col-6'>
<span className='h6 badge bg-dark p-2'>News </span> <span> Portal </span>

  </div>


<div className='col-6 text-end'><BsSearch className='m-2' size={25} />

{/* <button className="btn btn-primary"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}
<Sidenav/>
<BsList className='m-2' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" size={25} /></div>
</nav>
     

    </div>
  )
}

export default Navbar
