import { FaPlus } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { FaUserEdit } from "react-icons/fa";
import { AiOutlineFileAdd } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { MdOutlineViewList } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function SideBAr() {
  return (
    <div className="bg-white  pt-4 w-1/4 h-screen relative mt-0.5 overflow-y-auto">
      <div className="">
        <ul className="h-3/4">
          <li className="pl-4">
            <span className="text-gray-500"> MENU</span>
          </li>
          <hr />
          <li className="pl-4">
            <NavLink
              to="/dashboard"
              className={(navdata) => {
                if (navdata.isActive)
                  return " flex items-center py-2 text-base font-normal text-gray-900 bg-gray-200 border-r-8 border-blue-500";
                return "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg ";
              }}
            >
              <BsGraphUp className="text-blue-500" />
              <span className="ml-3"> Dashboard</span>
            </NavLink>
          </li>
          <hr />
          <li className="pl-4">
            <NavLink
              to="/profile"
              className={(navdata) => {
                if (navdata.isActive)
                  return " flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 border-r-8 border-blue-500";
                return "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg ";
              }}
            >
              <FaUserEdit className="text-blue-500" />
              <span className="ml-3">Edit Profile</span>
            </NavLink>
          </li>
          <hr />
          <li className="pl-4">
            <NavLink
              to="/messages"
              className={(navdata) => {
                if (navdata.isActive)
                  return " flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 border-r-8 border-blue-500";
                return "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg ";
              }}
            >
              <HiOutlineMail  className="text-blue-500"/>
              <span className="ml-3">Messages</span>
              <span className="ml-3  bg-blue-500 px-2 py-0.5 rounded text-white font-bold text-sm"> 
                3
              </span>
            </NavLink>
          </li>
          <hr />
          <li className="pl-4">
            <NavLink
              to="/agent"
              className={(navdata) => {
                if (navdata.isActive)
                  return " flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 border-r-8 border-blue-500";
                return "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg ";
              }}
            >
              <IoIosPeople  className="text-blue-500"/>
              <span className="ml-3">Agent List</span>
            </NavLink>
          </li>
          <hr />
          <li className="pl-4">
            <NavLink
              to="/submenu"
              className={(navdata) => {
                if (navdata.isActive)
                  return " flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 border-r-8 border-blue-500";
                return "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg ";
              }}
            >
              <FaPlus className="text-blue-500"/>
              <span className="ml-3">Submenu</span>
            </NavLink>
          </li>
          <hr />
          <li className="pl-4">
            <span className="text-gray-500"> Sub Menu</span>
          </li>
          <hr />
          <li className="pl-4">
            <NavLink
              to="/blogs"
              //   className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg "
              className={(navdata) => {
                if (navdata.isActive)
                  return " flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 border-r-8 border-blue-500";
                return "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg ";
              }}
            >
              <MdOutlineViewList className="text-blue-500"/>
              <span className="ml-3">My Blogs</span>
            </NavLink>
          </li>
          <hr />
          <li className="pl-4">
            <NavLink
              to="/user"
              className={(navdata) => {
                if (navdata.isActive)
                  return " flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 border-r-8 border-blue-500";
                return "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg ";
              }}
            >
             <IoIosPeople  className="text-blue-500"/>
              <span className="ml-3">User</span>
              <span className="ml-3  bg-blue-500 px-2 py-0.5 rounded text-white">
                3
              </span>
            </NavLink>
          </li>
          <hr />
          <li className="pl-4">
            <NavLink
              to="reviews"
              className={(navdata) => {
                if (navdata.isActive)
                  return " flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 border-r-8 border-blue-500";
                return "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg ";
              }}
            >
              <GoCommentDiscussion className="text-blue-700"/>
              <span className="ml-3">Reviews</span>
              <span className="ml-3 bg-blue-500 px-2 py-0.5 rounded text-white">
                2
              </span>
            </NavLink>
          </li>
          <hr />
          <li className="pl-4">
            <NavLink
              to="/new"
              className={(navdata) => {
                if (navdata.isActive)
                  return " flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 border-r-8 border-blue-500";
                return "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg ";
              }}
            >
              <AiOutlineFileAdd className="text-blue-700"/>
              <span className="ml-3">Add New</span>
            </NavLink>
          </li>
          <hr />
        </ul>
      </div>
      <div className="flex items-center flex-end p-2  font-normal text-gray-900 rounded-lg absolute bottom-0">
        <AiOutlineCopyrightCircle className="text-blue-700"/>
        <span className="ml-2 text-[10px]">HOMERADAR 2022 . ALL RIGHTS RESERVED</span>
      </div>
    </div>
  );
}
