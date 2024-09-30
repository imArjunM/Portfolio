'use client';

import SocialLinks from '@/common/social-links/SocialLinks';
import './ShowcaseMobile.css';
import { useEffect, useRef, useState } from 'react';
import Scroller from '@/common/scroller/Scroller';

export default function ShowcaseMobile() {
  const imageRef = useRef(null);
  const socialRef = useRef(null);
  const [distance, setDistance] = useState(0);

  // Calculate the distance between the two h1 elements
  useEffect(() => {
    const calculateDistance = () => {
      if (imageRef.current && socialRef.current) {
        const imageRect = imageRef.current.getBoundingClientRect();
        const socialRect = socialRef.current.getBoundingClientRect();

        const calculatedDistance = socialRect.top - imageRect.bottom;
        setDistance(calculatedDistance);
      }
    };

    // Initial calculation
    calculateDistance();

    // Recalculate on window resize
    window.addEventListener('resize', calculateDistance);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', calculateDistance);
    };
  }, []);

  return (
    <section className='ShowcaseMobile'>
      <div className='page_container'>
        <main className='ShowcaseMobile_container'>
          <article className='ShowcaseMobile_content'>
            <header className='ShowcaseMobile_title_groups'>
              <div className='title_holder'>
                <h1 className='ShowcaseMobile_main_title'>FULL STACK</h1>
              </div>
              <div className='title_holder'>
                <h1 className='ShowcaseMobile_tone_title'>DEVELOPER</h1>
              </div>
              <div className='subtitle_holder'>
                <p className='ShowcaseMobile_subtitle'>UI/UX DESIGN CAPABLE</p>
              </div>
            </header>

            <section className='showcaseMobile_profile' ref={imageRef}>
              <figure
                className='showcaseMobile_banner_image'
                aria-label='Profile Banner Image'
                style={{ height: distance * 0.8 }}
              ></figure>

              <section className='showcaseMobile_profile_info'>
                <div className='profile_info'>
                  <div className='profile_info_group'>
                    <h1 className='profile_info_name'>ARJUN</h1>
                    <h1 className='profile_info_second_name'>MUTHUSAMY</h1>
                  </div>
                </div>
              </section>

              <div className='ShowcaseMobile_scroll'>
                <Scroller />
              </div>
            </section>
          </article>

          <footer className='ShowcaseMobile_social_links' ref={socialRef}>
            <nav aria-label='Social media links'>
              <SocialLinks screen='mobile' />
            </nav>
          </footer>
        </main>
      </div>
    </section>
  );
}
