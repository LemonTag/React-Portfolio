// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';

// TODO: Create a styles object called "styles"

function Navbar() {
  // TODO: Add a style attribute to `nav`
  return (
    <nav className="navbar">
         <a href="/" className = 'navbar-brand'>My Portfolio</a>
        <ul className='navbar-list'>
        <li className="navbar-item"><a href="/Home">Home</a></li>
        <li className="navbar-item"><a href="/About">About</a></li>
        <li className="navbar-item"><a href="/Portfolio">Portfolio</a></li>
        <li className="navbar-item"><a href="/Contact">Contact</a></li>
        </ul>
     
    </nav>
  );
}

export default Navbar;
