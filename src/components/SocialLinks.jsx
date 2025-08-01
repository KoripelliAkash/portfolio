import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function SocialLinks() {
  const socialLinks = [
    {
      id: 'github',
      icon: <FaGithub />,
      url: 'https://github.com/KoripelliAkash',
      label: 'GitHub'
    },
    {
      id: 'linkedin',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/akash-koripelli-9202b4262/',
      label: 'LinkedIn'
    },
    {
      id: 'instagram',
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/akashkoripelli?igsh=MTdnaWJ0OHhidmo3aQ==', 
      label: 'Instagram'
    }
  ];

  return (
    <div className="social-links">
      {socialLinks.map(link => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}