'use client';
import SocialLinks from '@/common/social-links/SocialLinks';
import './Showcase.css';
import { useEffect, useRef, useState } from 'react';

import Scroller from '@/common/scroller/Scroller';

export default function Showcase() {
  const fullRef = useRef(null);
  const stackRef = useRef(null);
  const [distance, setDistance] = useState(0);
  const [fullWidth, setFullWidth] = useState(0);

  // Calculate the distance between the two h1 elements
  useEffect(() => {
    const calculateDistance = () => {
      if (fullRef.current && stackRef.current) {
        const fullRect = fullRef.current.getBoundingClientRect();
        const stackRect = stackRef.current.getBoundingClientRect();

        setFullWidth(fullRect.width);

        const calculatedDistance = stackRect.left - fullRect.right;
        setDistance(calculatedDistance);
      }
    };

    // Initial calculation
    calculateDistance();

    window.addEventListener('resize', calculateDistance);

    return () => {
      window.removeEventListener('resize', calculateDistance);
    };
  }, []);

  return (
    <section className='Showcase'>
      <div className='page_container'>
        <main className='Showcase_container'>
          <article className='showcase_content'>
            <header className='showcase_title_wrapper'>
              <div
                className='hero_image'
                style={{
                  left: fullWidth + 30,
                  width: distance,
                  height: distance * 1.35,
                }}
              ></div>
              <h1 className='name_title'>
                <div className='Showcase_name_title'>
                  ARJUN <span>MUTHUSAMY</span>
                </div>
              </h1>
              <div className='center_title'>
                <div className='title_wrapper' ref={fullRef}>
                  <span className='Showcase_main_title'>F</span>
                  <span className='Showcase_main_title'>U</span>
                  <span className='Showcase_main_title'>L</span>
                  <span className='Showcase_main_title'>L</span>
                </div>
                <div className='title_wrapper' ref={stackRef}>
                  <span className='Showcase_main_title'>-</span>
                  <span className='Showcase_main_title'>S</span>
                  <span className='Showcase_main_title'>T</span>
                  <span className='Showcase_main_title'>A</span>
                  <span className='Showcase_main_title'>C</span>
                  <span className='Showcase_main_title'>K</span>
                </div>
              </div>
              <div className='bottom_title'>
                <div className='subtitle_holder'>
                  <p className='ShowcaseMobile_subtitle'>
                    UI/UX DESIGN CAPABLE
                  </p>
                </div>
                <div className='title_wrapper'>
                  <span className='showcase_secondary_title'>D</span>
                  <span className='showcase_secondary_title'>E</span>
                  <span className='showcase_secondary_title'>V</span>
                  <span className='showcase_secondary_title'>E</span>
                  <span className='showcase_secondary_title'>L</span>
                  <span className='showcase_secondary_title'>O</span>
                  <span className='showcase_secondary_title'>P</span>
                  <span className='showcase_secondary_title'>E</span>
                  <span className='showcase_secondary_title'>R</span>
                </div>
              </div>
            </header>
          </article>
          <footer className='showcase_footer'>
            <div className='showcase_footer_wrapper'>
              <div className='scroll_space'>
                <Scroller />
              </div>
              <nav aria-label='Social media links'>
                <SocialLinks screen='desktop' />
              </nav>
            </div>
          </footer>
        </main>
      </div>
    </section>
  );
}
