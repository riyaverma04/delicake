
import React, { useState, useEffect } from "react";
import { Home, Compass, MessageSquare, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = window.scrollY;


  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/users-home", icon: <Home size={26} /> },
    { name: "Explore", path: "/explore-cakes", icon: <Compass size={26} /> },
    { name: "Chat", path: "/chat", icon: <MessageSquare size={26} /> },
    { name: "Profile", path: "/user-profile", icon: <User size={26} /> },
  ];

  return (
    <nav
      className={`fixed bottom-0 w-full justify-around items-center bg-[#eeeeee] shadow-md rounded-t-4xl flex space-x-6 px-6 py-1 pt-2 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          onClick={() => setActive(item.path)}
          className={`flex flex-col items-center text-gray-600 transition-all ${
            active === item.path ? "text-[var(--theme-color)]" : "text-gray-600"
          }`}
        >
          {item.icon}
          <span className="text-xs ">{item.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;

