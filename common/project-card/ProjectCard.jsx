import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ title, technologies, year }) {
  return (
    <article className='ProjectCard'>
      <figure
        className='ProjectCard__banner'
        aria-label={`${title} banner image`}
      ></figure>
      <div className='ProjectCard__content'>
        <header className='ProjectCard__headline'>
          <h2 className='ProjectCard__headline_fs'>{title}</h2>
          <p className='ProjectCard__date_fs'>{year}</p>
        </header>
        <section className='ProjectCard__description'>
          <ul className='Stack__content_list'>
            {technologies.map((tech, index) => (
              <li key={index} className='Stack__technology_item'>
                <p className='Stack__technology_fs'>{tech}</p>
                {index < technologies.length - 1 && (
                  <div className='Stack__dot' aria-hidden='true'></div>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
