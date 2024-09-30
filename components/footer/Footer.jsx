import './Footer.css';

export default function Footer() {
  return (
    <footer className='Footer section_space'>
      <div className='page_container'>
        <div className='Footer__wrapper'>
          <div className='Footer__content'>
            <div className='Footer__title_space'>
              <div className='Footer__mobile_avatar' aria-hidden='true'></div>
              <h2 className='Footer__title'>Have something in mind?</h2>
              <div className='Footer__inner_title_space'>
                <div className='Footer__avatar' aria-hidden='true'></div>
                <h2 className='Footer__title'>Let’s build it together.</h2>
              </div>
            </div>

            <div className='Footer__actions'>
              <button className='btn btn_primary' aria-label='Get in touch'>
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
