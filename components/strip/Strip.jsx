import './Strip.css';
import StripImage from '../../assets/icons/strip.svg';
import Image from 'next/image';

export default function Strip() {
  return (
    <section className='Strip__container' aria-labelledby='strip-section'>
      <div id='strip-section' className='visually-hidden'>
        Key Sections
      </div>

      <article className='Strip__wrapper'>
        <h2 className='Strip__title_fs'>WORK</h2>
        <Image
          className='Strip__image'
          src={StripImage}
          alt='Work section visual indicator'
        />
      </article>

      <article className='Strip__wrapper'>
        <h2 className='Strip__title_fs'>PROJECTS</h2>
        <Image
          className='Strip__image'
          src={StripImage}
          alt='Projects section visual indicator'
        />
      </article>

      <article className='Strip__wrapper'>
        <h2 className='Strip__title_fs'>FEATURES</h2>
        <Image
          className='Strip__image'
          src={StripImage}
          alt='Features section visual indicator'
        />
      </article>

      <article className='Strip__wrapper'>
        <h2 className='Strip__title_fs'>SHOWCASE</h2>
        <Image
          className='Strip__image'
          src={StripImage}
          alt='Showcase section visual indicator'
        />
      </article>

      <article className='Strip__wrapper'>
        <h2 className='Strip__title_fs'>PORTFOLIO</h2>
        <Image
          className='Strip__image'
          src={StripImage}
          alt='Portfolio section visual indicator'
        />
      </article>
    </section>
  );
}
