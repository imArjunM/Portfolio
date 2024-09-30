import About from '@/components/about/About';
import CopyRights from '@/components/copy-rights/CopyRights';
import Footer from '@/components/footer/Footer';
import Projects from '@/components/projects/Projects';
import ShowcaseMobile from '@/components/showcase-mobile/ShowcaseMobile';
import Showcase from '@/components/showcase/Showcase';
import Strip from '@/components/strip/Strip';

export default function page() {
  return (
    <main>
      <Showcase />
      <ShowcaseMobile />
      <About />
      <Strip />
      <Projects />
      <Footer />
      <CopyRights />
    </main>
  );
}
