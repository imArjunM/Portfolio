import React from 'react';
import './SocialLinks.css';
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconMapping = {
  linkedin: faLinkedinIn,
  github: faGithub,
  twitter: faXTwitter,
  instagram: faInstagram,
  email: faEnvelope,
};

export default function SocialLinks({ screen }) {
  const links = [
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'Email', url: 'mailto:example@example.com' },
  ];
  return (
    <ul className={`social_link_list ${screen}`}>
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={link.name}
          >
            <FontAwesomeIcon
              icon={iconMapping[link.name.toLowerCase()]}
              className={`social_icon ${screen}`}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
