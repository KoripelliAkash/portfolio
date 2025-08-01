import SocialLinks from './SocialLinks'
import Navigation from './Navigation'

export default function Header({ activeSection, setActiveSection }) {
  return (
    <header className="site-header">
      <div className="header-content">
        <div className="logo">
          <h2>KA</h2>
        </div>
        <Navigation
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <SocialLinks />
      </div>
    </header>
  )
}