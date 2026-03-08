import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import perilogo from "../assets/perilogo.svg";
import paayumolilogo from "../assets/gglogotemp.png";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  // All nav items in one place
  const navItems = [
    { label: "About", id: "about" },
    { label: "Chief Guests", id: "chief-guests" },
    { label: "Events", id: "events" },
    { label: "Team", link: "/team" },
    { label: "Contact", id: "footer" },
    { label: "Brochure", link: "/brochure" },
    { label: "Rulebook", download: "/brochures/rulebook.pdf" }, // auto download
  ];

  const renderNavItem = (item, mobile = false) => {
    const className = mobile
      ? "text-left py-3 text-lg font-medium border-b border-orange-200/20 text-orange-100 capitalize"
      : "nav-btn";

    if (item.download) {
      return (
        <a
          key={item.label}
          href={item.download}
          download
          className={className}
          onClick={() => setMenuOpen(false)}
        >
          {item.label}
        </a>
      );
    }

    if (item.link) {
      return (
        <Link
          key={item.label}
          to={item.link}
          className={className}
          onClick={() => setMenuOpen(false)}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <button
        key={item.label}
        onClick={() => handleNavClick(item.id)}
        className={className}
      >
        {item.label}
      </button>
    );
  };

  return (
    <StyledWrapper>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl">
        <div className="glass-nav px-8 py-5 flex justify-between items-center w-full">
          
          {/* Logo */}
          <Link
            to="/"
            onClick={() => handleNavClick("hero")}
            className="flex items-center gap-2"
          >
            <img className="h-10 w-auto" src={perilogo} alt="college logo" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => renderNavItem(item))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-4">
            <img
              className="h-8 sm:h-10 w-auto block shrink-0"
              src={paayumolilogo}
              alt="festival logo"
            />

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-2xl p-2 rounded-full text-orange-100 hover:bg-orange-400/10 transition-colors"
            >
              {menuOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden absolute top-20 left-0 right-0 glass-nav p-6 transition-all duration-300 origin-top ${
            menuOpen
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => renderNavItem(item, true))}
          </div>
        </div>
      </nav>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .glass-nav {
    background: rgba(11, 6, 5, 0.82);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 150, 83, 0.34);
    border-radius: 50px;
    box-shadow: 0 14px 34px -10px rgba(0, 0, 0, 0.62), inset 0 0 22px rgba(255, 94, 0, 0.08);
  }

  .nav-btn {
    padding: 8px 20px;
    border-radius: 99px;
    font-size: 14px;
    font-weight: 700;
    color: #ffe4bf;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  .nav-btn:hover {
    background: rgba(255, 122, 35, 0.18);
    color: #ffd283;
  }

  button {
    border: none;
    outline: none;
    background: none;
  }
`;

export default Navbar;
