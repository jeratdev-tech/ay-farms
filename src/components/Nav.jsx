import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Logo = () => (
  <a href="/" className="flex items-center">
    <img src={headerLogo} alt="AY Farms Logo" className="w-[100px] h-[80px]" />
  </a>
);

const NavLinks = ({ isMobile, toggleMenu }) => (
  <ul
    className={`flex ${
      isMobile ? "flex-col" : "flex-row"
    } gap-12 xl:gap-28 font-bold max-container`}
  >
    {navLinks.map((item) => (
      <li key={item.label}>
        <a
          href={item.href}
          className="font-montserrat text-lg text-slate-gray hover:text-green-500"
          onClick={isMobile ? toggleMenu : null} // Close the menu on link click for mobile
        >
          {item.label}
        </a>
      </li>
    ))}
  </ul>
);

const HamburgerMenu = ({ isMenuOpen, toggleMenu }) => (
  <div>
    <button
      aria-label="Toggle menu"
      onClick={toggleMenu}
      className="lg:hidden p-2 focus:outline-none"
    >
      <img src={hamburger} alt="Menu" className="w-6 h-6" />
    </button>
    {isMenuOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
        <div className="fixed top-0 right-0 w-3/4 h-full bg-white p-6 shadow-lg z-50">
          <button
            aria-label="Close menu"
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-xl"
          >
            &times; {/* Close icon */}
          </button>
          <NavLinks isMobile={true} toggleMenu={toggleMenu} />
        </div>
      </div>
    )}
  </div>
);

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full pt-6">
      <nav className="flex justify-between items-center max-container">
        <Logo />
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <NavLinks isMobile={false} />
        </div>
        <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
};

export default Nav;
