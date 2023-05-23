import './Header.css';
import { TiShoppingCart } from "react-icons/ti";

function Header() {
  return (
    <header className="main-header">
      <h1 className="logo" >Your<span>Car</span></h1>
      <nav className="main-nav" >
        <ul className="main-link-list">
          <li><a href="/#Home" className="active">Home</a></li>
          <li><a href="/#About" >About</a></li>
          <li><a href="/#Services" >Services</a></li>
          <li><a href="/#Cars" >Cars</a></li>
          <li><a href="/#Contact-us" >Contact us</a></li>
        </ul>
        <span className="shopping-icon"> <TiShoppingCart /> </span>
      </nav>

    </header>
  );
}

export default Header;