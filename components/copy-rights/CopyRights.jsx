import SocialLinks from '@/common/social-links/SocialLinks';
import React from 'react';
import './CopyRights.css';

export default function CopyRights() {
  return (
    <footer className='CopyRights' aria-labelledby='footer-label'>
      <div className='page_container'>
        <section className='Footer__copyrights'>
          <p className='Footer__copyright_fs' id='footer-label'>
            Copyright © 2024 Arjun Muthusamy. All rights reserved.
          </p>

          <nav aria-label='Social media links'>
            <SocialLinks screen='desktop' />
          </nav>

          <p className='Footer__mobile_copyright_fs'>© Arjun Muthusamy 2024</p>
        </section>
      </div>
    </footer>
  );
}
