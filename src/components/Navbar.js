export default function Navbar() {
  return (
    <nav className="navbar">
      <button type="button" className="navbar-responsive">
        <div className="button-login">Login</div>
      </button>

      <h1 className="navbar-tittle">EarlEdu</h1>
      <nav className="navbar-menu">
        <a href="/">
          <button type="button">Alphabet Learn</button>
        </a>
        <a href="/">
          <button type="button">Babby Name Finder</button>
        </a>
        <a href="/">
          <button type="button" className="active">
            Community
          </button>
        </a>
      </nav>
    </nav>
  );
}
