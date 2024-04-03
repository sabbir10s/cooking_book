import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../Assets/Images/logo.png";
import { ButtonFill } from "../Button/Button";
const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "News",
    link: "news",
  },
  {
    name: "Contact",
    link: "contact",
  },
];
const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Dropdown options
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`${
        scrollY > 100
          ? "shadow-lg scroll-down bg-white text-primary "
          : "text-primary "
      }`}
    >
      <div className="py-6 container mx-auto px-2 flex items-center justify-between">
        <span className="scroll-watcher"></span>
        <Link to="/" className="flex items-center">
          <img className="w-[120px]" src={logo} alt="" />
        </Link>

        <div>
          <div className="hidden md:block space-x-10 ">
            {navItems.map((item, idx) => (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-primary lg:border-b-[2px] pb-1 px-2 lg:border-b-primary navLink"
                    : "nevEffect lg:after:bg-primary"
                }
                key={idx}
                to={item.link}
              >
                {item.name}
              </NavLink>
            ))}
            <ButtonFill>Login</ButtonFill>
          </div>

          <div className="block md:hidden pl-2 transition">
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                className=" py-2 text-light transition"
                onClick={toggleDropdown}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute right-0 z-10 mt-1 w-48 py-2 text-left text-sm text-gray-700 bg-primary rounded-lg shadow ">
                  <div className="py-1 flex flex-col gap-4 pl-4">
                    <div className=" flex flex-col gap-4">
                      {navItems.map((item, idx) => (
                        <Link
                          className="text-white"
                          key={idx}
                          onClick={handleOptionClick}
                          href={item.link}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <Link
                      className="border border-white rounded p-2 w-24 text-white"
                      to="/login"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
