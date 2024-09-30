import React from 'react';
import './Stack.css';

export default function Stack() {
  return (
    <section className='Stack' aria-labelledby='stack-section'>
      <header className='page__headline'>
        <h2 id='stack-section' className='page_title'>
          STACK TECHNOLOGY
        </h2>
      </header>

      <div className='Stack__area_space'>
        <StackCard
          number='#1'
          title='Frontend'
          technologies={[
            'HTML',
            'CSS',
            'REACT',
            'NEXT.JS',
            'TYPESCRIPT',
            'TAILWIND',
          ]}
        />
        <StackCard
          number='#2'
          title='UI Dynamics'
          technologies={['REDUX', 'ZUSTAND', 'REACT QUERY', 'SHADCN', 'GSAP']}
        />
        <StackCard
          number='#3'
          title='Backend'
          technologies={['NODE.JS', 'EXPRESS', 'MONGODB', 'PRISMA', 'ZOD']}
        />
        <StackCard
          number='#4'
          title='DevOps & UI/UX'
          technologies={['DOCKER', 'GIT', 'JEST', 'FIGMA', 'PHOTOSHOP']}
        />
      </div>
    </section>
  );
}

function StackCard({ number, title, technologies }) {
  return (
    <article className='StackCard'>
      <div className='Stack__content'>
        <header className='Stack__headline'>
          <h3 className='Stack__headline_fs'>{title}</h3>
        </header>
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
      </div>
      <div className='Stack__number'>
        <h4 className='Stack__number_fs'>{number}</h4>
      </div>
    </article>
  );
}
