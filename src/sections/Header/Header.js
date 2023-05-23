import './Header.css';

import { ShoppingCard } from './../../components/index';

import { FaBars, FaCross } from "react-icons/fa";

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
        <ShoppingCard />
        {/* <div className="menu-icon">  FIXME: TODO: to create my responsive site
          <FaBars className="BarsIcon" />
          <FaCross className="CrossIcon" />
        </div> */}
      </nav>
    </header>
  );
}

export default Header;