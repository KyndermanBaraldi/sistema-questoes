'use client'
import Link from "next/link";
import { generateSlug } from "@/utils/slug";
import { useState } from "react";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";


const Menu: React.FC = () => {

  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(true);
  };

  return (
    <nav className="app-navbar">
      <div className="logo">
        <Link href="/" onClick={closeMenu}>
          Curso HTML
        </Link>
      </div>
      <div className={`nav-list ${menuOpen ? "hide" : ""}`}>
        <ul>
          <li className="nav-item">
            <Link href="/" className="nav-link" onClick={closeMenu}>
              Início
            </Link>
          </li>
           
          <li className="dropdown">
            <a className="nav-link" href="#" onClick={closeMenu}>Questões</a>  
            <div className="dropdown-menu">
              <Link href="/simulado" className="nav-link" onClick={closeMenu}>
                Simulado Digital
              </Link>

              <hr style={{ width: "98%", margin: "10px auto" }} />

              <a className="nav-link" href="https://forms.gle/KfyYBTHWLdKv9gZd8" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Cadastrar</a>
            </div>
          </li>
          
          

          

         

        </ul>
      </div>
      {/* <div className="login-button">
        <button><a href="#">Entrar</a></button>
      </div> */}
      
      <div className="mobile-menu">
        <a href="#" className="mobile-menu-icon" onClick={toggleMenu}>
          {menuOpen ? <VscMenu /> : <VscChromeClose /> }
        </a>
      </div>
      
    </nav>
  );
};

export default Menu;