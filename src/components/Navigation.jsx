export default function Navigation({ activeSection, setActiveSection }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' }
  ]

  return (
    <nav className="main-nav">
      <ul>
        {navItems.map(item => (
          <li key={item.id}>
            <button
              onClick={() => setActiveSection(item.id)}
              className={activeSection === item.id ? 'active' : ''}
            >
              {item.label}
            </button>
          </li>
        ))}
        <div className="star"><a href="https://example.com">
  <button>Rate</button>
</a></div>
      </ul>
      
    </nav>
  )
}