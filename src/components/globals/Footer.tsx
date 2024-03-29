import React from 'react'
import Logo from '../../../public/assets/brand/Logo'
import IconTwitter from '@/components/icons/IconTwitter'
import IconInstagram from './../icons/IconInstagram';
import IconFacebook from '../icons/IconFacebook';
import IconLinkedin from '../icons/IconLinkedin';

function Footer() {
  return (
    <footer className='flex'>
      <div>
        <span>
          <Logo />
        </span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corporis doloribus quibusdam tempore in ex!</p>
      </div>
      <div>
        <p>About</p>
        <p>About</p>
        <p>About</p>
        <p>About</p>
        <p>About</p>
      </div>
      <div>
        <p>contact us</p>
        <span className='flex items-center gap-2 pb-3'> <IconTwitter /> Twitter</span>
        <span className='flex items-center gap-2 pb-3'> <IconInstagram /> Instagram</span>
        <span className='flex items-center gap-2 pb-3'> <IconFacebook /> Facebook</span>
        <span className='flex items-center gap-2 pb-3'> <IconLinkedin /> Linkedin</span>
      </div>
    </footer>
  )
}

export default Footer