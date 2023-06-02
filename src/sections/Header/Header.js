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

  const allLinksInListElms = document.querySelectorAll('.main-link-list li a');

  // close main nav onClick at any link  
  allLinksInListElms.forEach(function (link) {
    link.addEventListener('click', () => {
      if (classValue.includes("open")) {
        setOpenClass()
      }
      allLinksInListElms.forEach((i) => { i.classList.remove("active") });
      if (!link.classList.contains('active')) {
        link.classList.add("active");
      }
    });
  });

  document.onkeyup = function (e) {
    if (e.key === "Escape") {
      if (classValue.includes("open")) {
        setOpenClass()
      }
    }
  };
  document.onclick = (e) => {
    if (classValue.includes("open") && !e.target.classList.contains('menu-icon')) {
      setOpenClass();
    }
  }


  // Change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 400) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  // Change active on nav item at scrolling
  window.addEventListener('scroll', () => {
    changeColor();
    allLinksInListElms.forEach(function (link) {
      const sectionRelated = document.querySelector(`${link.getAttribute('href').slice(1)}`)
      if (window.scrollY >= sectionRelated.offsetTop) {
        allLinksInListElms.forEach((i) => { i.classList.remove("active") });
        if (!link.classList.contains('active')) {
          link.classList.add("active");
        }
      }
    });
  });

  return (
    <header className={color ? "main-header header-bg" : "main-header"}>
      <a href="/#Home"><h1 className="logo" >Your<span>Car</span></h1></a>
      <nav className="main-nav" >
        <ul className={`main-link-list ${classValue}`} >
          <li><a href="/#Home" className="active">Home</a></li>
          <li><a href="/#About" >About</a></li>
          <li><a href="/#Services" >Services</a></li>
          <li><a href="/#Cars" >Cars</a></li>
          <li><a href="/#Contact-us" >Contact us</a></li>
        </ul>
        <ShoppingCard />
        <div className="menu-icon-cont" onClick={setOpenClass} >
          <FaBars className="menu-icon" onClick={setOpenClass} />
        </div>
      </nav>
    </header>
  );
}

export default Header;