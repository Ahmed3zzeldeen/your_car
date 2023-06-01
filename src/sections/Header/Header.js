import './Header.css';

import { useState } from "react";

import { ShoppingCard } from './../../components/index';

import { FaBars } from "react-icons/fa";



function Header() {
  const [classValue, setClassValue] = useState("");

  function setOpenClass() {
    if (classValue.includes("open")) {
      setClassValue("");
    } else {
      setClassValue("open");
    }
  }

  return (
    <header className="main-header container">
      <h1 className="logo" >Your<span>Car</span></h1>
      <nav className="main-nav" >
        <ul className={`main-link-list ${classValue}`} >
          <li><a href="/#Home" className="active">Home</a></li>
          <li><a href="/#About" >About</a></li>
          <li><a href="/#Services" >Services</a></li>
          <li><a href="/#Cars" >Cars</a></li>
          <li><a href="/#Contact-us" >Contact us</a></li>
        </ul>
        <ShoppingCard />
        <FaBars className="menu-icon" onClick={setOpenClass} />
      </nav>
    </header>
  );
}

export default Header;