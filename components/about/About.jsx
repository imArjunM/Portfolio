import Image from 'next/image';
import './About.css';
import Stack from '../stack/Stack';
import AboutImage from '@/assets/images/about.jpg';

export default function About() {
  return (
    <section className='About section_space' aria-labelledby='about-section'>
      <div className='page_container'>
        <main>
          <article className='About_container'>
            <header className='page__headline'>
              <h1 id='about-section' className='page_title'>
                ABOUT ME
              </h1>
            </header>
            <h2 className='About_main_content_title'>
              Passionate developer with expertise in frontend, proficiency in
              backend, and a solid grasp of UI/UX design. Adept at building apps
              from concept to completion, with a keen eye for detail and
              performance.
            </h2>
          </article>

          <div className='About__grid_layout'>
            <article className='About__stack_info'>
              <section className='About__more_contents'>
                <h3 className='About_support_content_title'>
                  Over the years, I have spent time converting designs into
                  pixel perfect, performant, and responsive applications and
                  websites. With mastery in CSS, I am able to create any design
                  with ease. I always focus on excellence.
                </h3>
              </section>
              <section className='About__stack_space'>
                <Stack />
              </section>
            </article>

            <article className='About__profile_Info'>
              <figure className='About__profile_info_wrapper'>
                <Image
                  className='About__profile_info_image'
                  src={AboutImage}
                  alt='Profile image of the developer'
                />
              </figure>
            </article>
          </div>
        </main>
      </div>
    </section>
  );
}
