import { sfProText } from '@/utils/customFonts';
import '../styles/index.css';

export const metadata = {
  title: 'Fullstack Designer & Developer | UI/UX Specialist | Portfolio',
  description:
    'Fullstack Designer with expertise in frontend and backend development, UI/UX design, and database management. Skilled in React, Next.js, Node.js, and MongoDB. Passionate about building scalable, high-performance web and mobile applications.',
  keywords:
    'Fullstack Developer, UI/UX Designer, Frontend Developer, React.js, Next.js, Node.js, MongoDB, Web Developer Portfolio',
  author: 'Arjun Muthusamy',
  charset: 'UTF-8',
  robots: 'index, follow',
};

// Move viewport to a separate export
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet={metadata.charset} />
        <meta name='description' content={metadata.description} />
        <meta name='keywords' content={metadata.keywords} />
        <meta name='author' content={metadata.author} />
        <meta name='robots' content={metadata.robots} />
        <title>{metadata.title}</title>
      </head>
      <body className={`${sfProText.variable}`}>{children}</body>
    </html>
  );
}
