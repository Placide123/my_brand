import React, {useState} from "react";
import Navbar from "./DashHeader";
import SideBAr from "./SideBar";


function Dashboard({ children }) {
  
  return (
    <div className="flex h-screen flex-col bg-gray-100">
      <Navbar />
      <div className="flex">
      <SideBAr />
      <div className="w-full">{children}</div>
      </div>
      
    </div>
  );
}

export default Dashboard;
