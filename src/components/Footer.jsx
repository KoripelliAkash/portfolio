import SocialLinks from './SocialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">&copy; {currentYear} Akash Koripelli</p>
        <SocialLinks />
      </div>
    </footer>
  );
}