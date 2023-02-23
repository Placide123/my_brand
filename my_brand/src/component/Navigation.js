import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-wrap justify-between border-2 border-blue-600 p-2">
      <div>
        <h3 className="pl-3">TWC</h3>
      </div>
      <div className="flex items-center">
        <button
          className="block sm:hidden border border-blue-600 p-1 rounded"
          onClick={toggleMenu}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex sm:items-center sm:w-auto w-full`}
        >
          <li className="pr-3 pl-3 border-2 border-lime-300 mr-2">Resume</li>
          <li className="hover:bg-lime-300 p-2 hover:rounded"><NavLink to="/login"><span>LOGIN</span></NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
