import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

function Navbar() {
  return (
    <nav className="py-2 px-4 bg-white flex flex-row justify-end items-center shadow border-b">
      <div>
        <select className="form-select">
          <option>Home</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
      <div>
        <select className="form-select mx-5">
          <option>Listings</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
      <div>
        <a
          href="#"
          className="flex items-center p-2 text-base text-white rounded bg-blue-700 font-bold mr-3"
        >
          <AiOutlinePlusCircle />
          <span className="ml-3">LOG OUT</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
