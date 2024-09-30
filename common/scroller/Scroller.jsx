import './Scroller.css';
import React from 'react';
import Image from 'next/image';

import ScrollImage from '@/assets/icons/scroll-animation.svg';

export default function Scroller() {
  return (
    <nav aria-label='Scroll navigation' className='scroll_container'>
      <div className='scroll_banner'>
        <Image
          src={ScrollImage}
          alt='Scroll down indicator'
          className='scroll_banner_image'
        />
      </div>
      <div className='scroller' aria-hidden='true'>
        <div className='scroll_dot'></div>
      </div>
    </nav>
  );
}
