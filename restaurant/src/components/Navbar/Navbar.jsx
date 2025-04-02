import { useState } from "react";
import logo from "../../assets/logo.png";
import { LINKS } from "../../constants";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targeElement = document.getElementById(targetId);
    if (targeElement) {
      const offsetTop = targeElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };
  return (
    <nav className="fixed top-4 z-50 flex w-full flex-col items-center justify-center">
      <div className="flex w-full items-center justify-between overflow-y-hiddenp-4 p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-md lg:shadow-lg">
        <img src={logo} alt="Logo" width={80} height={22} />
        <div className="hidden space-x-6 lg:flex">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              className={`text-sm hover:opacity-50`}
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="w-full backdrop-blur-lg lg:hidden">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              className="block p-4 uppercase tracking-tighter"
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
