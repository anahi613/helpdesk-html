import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Help Desk
      </div>

      <ul className="menu">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Registrar</a></li>
        <li><a href="#">Tickets</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;