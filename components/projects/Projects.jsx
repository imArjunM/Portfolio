import './Projects.css';
import ProjectCard from '@/common/project-card/ProjectCard';

export default function Projects() {
  return (
    <section
      className='Projects section_space'
      aria-labelledby='projects-title'
    >
      <div className='page_container'>
        <article className='Projects_container'>
          <header className='page__headline'>
            <h1 id='projects-title' className='page_title'>
              Recent Works
            </h1>
          </header>

          <div className='Projects__list'>
            <ProjectCard
              title='Draft: Blogverse'
              technologies={['REACT', 'NEXT.JS', 'TYPESCRIPT', 'TAILWIND']}
              year='2024'
            />
            <ProjectCard
              title='Ecommerce Website'
              technologies={['REACT', 'NEXT.JS', 'TYPESCRIPT', 'TAILWIND']}
              year='2024'
            />
          </div>
        </article>
      </div>
    </section>
  );
}
