import React from 'react'

const Navbar = () => {
  return (
    <nav className='container flex justify-between items-center pt-8'>
      <div className=' flex items-center gap-16'>
        <div className='bg-primary w-16 py-3'>
          logo
        </div>
        <div className='hidden lg:flex lg:items-center lg:gap-8 '>
          <a href="#">Home</a>
          <a href="#">Property </a>
          <a href="#">Top Offers</a>
          <a href="#">References</a>
          <a href="#">About us</a>
        </div>
      </div>
      <div className='flex items-center gap-6'>
        <button className='btn-secondary'>Log in</button>
        <button className='btn-primary'>Contact us</button>
      </div>
    </nav>
  )
}

export default Navbar