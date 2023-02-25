import React, { useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import Dashboard from "../component/Dashboard";
import { HiLocationMarker } from "react-icons/hi";
import FiveStar from "../component/FiveStar";
import { GiNetworkBars } from "react-icons/gi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { RiArrowLeftSFill } from "react-icons/ri";
import { RiArrowRightSFill } from "react-icons/ri";

function List() {

  const [deleDataModel, setDelDataModel] = useState(false);
  const deleteModel = () => {
    let newState = !deleDataModel;
    setDelDataModel(newState);
  };
  return (
    <Dashboard>
      {/* ====================== Start::  deleteDataModel =============================== */}

      <div
        className={`min-h-full -ml-72 -mt-14 w-screen z-50 bg-opacity-30 backdrop-blur-sm fixed flex items-center justify-center px-4 ${
          deleDataModel === true ? "block" : "hidden"
        }`}
      >
        <div className="bg-white w-1/2 shadow-2xl rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h1 className="font-bold text-sm text-center w-11/12">
              Delete Client
            </h1>
            <hr className=" bg-primary border-b w-full" />
          </div>
          <div className="card-body">
            <form className=" px-8">
              <div>
                <h2 className="text-base m-4">
                  Do you really want permanently delete{" "}
                  <span className="italic text-black"></span>
                </h2>
              </div>
              <div className="w-full flex justify-between">
                <button
                  className="btn btn-danger light shadow-none"
                  onClick={(e) => deleteModel(e.preventDefault())}
                >
                  Cancel
                </button>
                <button className="btn btn-outline-danger btn-s shadow-none">
                  remove
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  deleteDataModel =============================== */}

      <div className="w-4/5 ml-24 mt-10 relative">
        <h1 className=" border-b border-gray-300 font-bold text-blue-800">
          Your Listings
        </h1>
        <hr />
        <div className="flex item-center justify-between mt-5">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="rounded px-2 py-1"
            />
            <RiSearchLine className="absolute ml-44 inset-y-3 right-2 text-blue-500" />
          </div>
          <div>
            <span>Sort by:</span>
            <select className="form-select px-2 py-1.5 ml-2">
              <option selected className="text-[12px]">
                Lastes
              </option>
              <option className="text-[12px]">Option 2</option>
              <option className="text-[12px]">Option 3</option>
            </select>
            <button
              type="Submit"
              className="ml-3  px-4 py-1.5 bg-blue-700 text-white"
              onClick={deleteModel}
            >
              Add New
            </button>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="flex mt-5 bg-white w-[49%] mr-[2%] ">
            <img
              src="https://images.unsplash.com/photo-1670272504471-61a632484750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="a person" 
              className="w-36 h-28 object-cover mr-4"
            />
            <div className=" w-full">
              <div className="flex flex-col mb-0.5 bottom-b border-gray-200 w-full">
                <h1 className="text-sm font-bold text-gray-500 mt-3">
                  Gorgeous House For sale
                </h1>
                <h4 className="flex items-center text-base font-normal text-gray-900 rounded-lg">
                  <HiLocationMarker className="text-blue-500" />
                  <span className="pl-2 text-[10px]">
                    70 Bright st New York, USA{" "}
                  </span>
                </h4>
                <small>
                  <FiveStar rating={4} />
                </small>
              </div>
              <hr className="w-full mb-2" />
              <div className="flex items-center justify-between">
                <div className="w-3/5 flex items-center text-base font-normal text-gray-900 rounded-lg">
                  <BsFillEyeFill className="text-blue-500" />
                  <span className="pl-2 text-[10px]">Viewed-645 </span>
                </div>
                <div className="flex items-center justify-between w-[38%] ">
                  <div className="w-10 text-center flex items-center justify-center">
                    <BiEdit className="text-blue-500" />
                  </div>
                  <div className="mx-1 w-10 text-center flex items-center justify-center">
                    <GiNetworkBars className="text-blue-500" />
                  </div>
                  <div className="w-10 text-center flex items-center justify-center">
                    <RiDeleteBin5Line className="text-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-5 bg-white w-[49%]">
            <img
              src="https://images.unsplash.com/photo-1670272504471-61a632484750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              className="w-36 h-28 object-cover mr-4"
            />
            <div className=" w-full">
              <div className="flex flex-col mb-0.5 bottom-b border-gray-200 w-full">
                <h1 className="text-sm font-bold text-gray-500 mt-3">
                  Luxury Family Home
                </h1>
                <h4 className="flex items-center text-base font-normal text-gray-900 rounded-lg">
                  <HiLocationMarker className="text-blue-500" />
                  <span className="pl-2 text-[10px]">
                    40 journal Square , Nj, USA{" "}
                  </span>
                </h4>
                <small>
                  <FiveStar rating={5} />
                </small>
              </div>
              <hr className="w-full mb-2" />
              <div className="flex items-center justify-between">
                <div className="w-3/5 flex items-center text-base font-normal text-gray-900 rounded-lg">
                  <BsFillEyeFill className="text-blue-500" />
                  <span className="pl-2 text-[10px]">Viewed-247 </span>
                </div>
                <div className="flex items-center justify-between w-[38%] ">
                  <div className="w-10 text-center flex items-center justify-center">
                    <BiEdit className="text-blue-500" />
                  </div>
                  <div className="mx-1 w-10 text-center flex items-center justify-center">
                    <GiNetworkBars className="text-blue-500" />
                  </div>
                  <div className="w-10 text-center flex items-center justify-center">
                    <RiDeleteBin5Line className="text-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-5 bg-white w-[49%] mr-[2%]">
            <img
              src="https://images.unsplash.com/photo-1670272504471-61a632484750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              className="w-36 h-28 object-cover mr-4"
            />
            <div className=" w-full">
              <div className="flex flex-col mb-0.5 bottom-b border-gray-200 w-full">
                <h1 className="text-sm font-bold text-gray-500 mt-3">
                  Family House for Rent
                </h1>
                <h4 className="flex items-center text-base font-normal text-gray-900 rounded-lg">
                  <HiLocationMarker className="text-blue-500" />
                  <span className="pl-2 text-[10px]">
                    34-42 Montgomery St , NY, USA{" "}
                  </span>
                </h4>
                <small>
                  <FiveStar rating={4} />
                </small>
              </div>
              <hr className="w-full mb-2" />
              <div className="flex items-center justify-between">
                <div className="w-3/5 flex items-center text-base font-normal text-gray-900 rounded-lg">
                  <BsFillEyeFill className="text-blue-500" />
                  <span className="pl-2 text-[10px]">Viewed-24 </span>
                </div>
                <div className="flex items-center justify-between w-[38%] ">
                  <div className="w-10 text-center flex items-center justify-center">
                    <BiEdit className="text-blue-500" />
                  </div>
                  <div className="mx-1 w-10 text-center flex items-center justify-center">
                    <GiNetworkBars className="text-blue-500" />
                  </div>
                  <div className="w-10 text-center flex items-center justify-center">
                    <RiDeleteBin5Line className="text-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-5 bg-white w-[49%]">
            <img
              src="https://images.unsplash.com/photo-1670272504471-61a632484750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              className="w-36 h-28 object-cover mr-4"
            />
            <div className=" w-full">
              <div className="flex flex-col mb-0.5 bottom-b border-gray-200 w-full">
                <h1 className="text-sm font-bold text-gray-500 mt-3">
                  Contemporary Apartment
                </h1>
                <h4 className="flex items-center text-base font-normal text-gray-900 rounded-lg">
                  <HiLocationMarker className="text-blue-500" />
                  <span className="pl-2 text-[10px]">
                    W 85th St, New York, USA{" "}
                  </span>
                </h4>
                <small>
                  <FiveStar rating={5} />
                </small>
              </div>
              <hr className="w-full mb-2" />
              <div className="flex items-center justify-between">
                <div className="w-3/5 flex items-center text-base font-normal text-gray-900 rounded-lg">
                  <BsFillEyeFill className="text-blue-500" />
                  <span className="pl-2 text-[10px]">Viewed-921 </span>
                </div>
                <div className="flex items-center justify-between w-[38%] ">
                  <div className="w-10 text-center flex items-center justify-center">
                    <BiEdit className="text-blue-500" />
                  </div>
                  <div className="mx-1 w-10 text-center flex items-center justify-center">
                    <GiNetworkBars className="text-blue-500" />
                  </div>
                  <div className="w-10 text-center flex items-center justify-center">
                    <RiDeleteBin5Line className="text-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-5 bg-white w-[49%] mr-[2%]">
            <img
              src="https://images.unsplash.com/photo-1670272504471-61a632484750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              className="w-36 h-28 object-cover mr-4"
            />
            <div className=" w-full">
              <div className="flex flex-col mb-0.5 bottom-b border-gray-200 w-full">
                <h1 className="text-sm font-bold text-gray-500 mt-3">
                  Kayak Point House
                </h1>
                <h4 className="flex items-center text-base font-normal text-gray-900 rounded-lg">
                  <HiLocationMarker className="text-blue-500" />
                  <span className="pl-2 text-[10px]">
                    75 Prince St, NY, USA{" "}
                  </span>
                </h4>
                <small>
                  <FiveStar rating={3} />
                </small>
              </div>
              <hr className="w-full mb-2" />
              <div className="flex items-center justify-between">
                <div className="w-3/5 flex items-center text-base font-normal text-gray-900 rounded-lg">
                  <BsFillEyeFill className="text-blue-500" />
                  <span className="pl-2 text-[10px]">Viewed-434 </span>
                </div>
                <div className="flex items-center justify-between w-[38%] ">
                  <div className="w-10 text-center flex items-center justify-center">
                    <BiEdit className="text-blue-500" />
                  </div>
                  <div className="mx-1 w-10 text-center flex items-center justify-center">
                    <GiNetworkBars className="text-blue-500" />
                  </div>
                  <div className="w-10 text-center flex items-center justify-center">
                    <RiDeleteBin5Line className="text-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-5 bg-white w-[49%]">
            <img
              src="https://images.unsplash.com/photo-1670272504471-61a632484750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              className="w-36 h-28 object-cover mr-4"
            />
            <div className=" w-full">
              <div className="flex flex-col mb-0.5 bottom-b border-gray-200 w-full">
                <h1 className="text-sm font-bold text-gray-500 mt-3">
                  Urban House
                </h1>
                <h4 className="flex items-center text-base font-normal text-gray-900 rounded-lg">
                  <HiLocationMarker className="text-blue-500" />
                  <span className="pl-2 text-[10px]">
                    70 Bright St,jersey City, Nj USA{" "}
                  </span>
                </h4>
                <small>
                  <FiveStar rating={5} />
                </small>
              </div>
              <hr className="w-full mb-2" />
              <div className="flex items-center justify-between">
                <div className="w-3/5 flex items-center text-base font-normal text-gray-900 rounded-lg">
                  <BsFillEyeFill className="text-blue-500" />
                  <span className="pl-2 text-[10px]">Viewed-244 </span>
                </div>
                <div className="flex items-center justify-between w-[38%] ">
                  <div className="w-10 text-center flex items-center justify-center">
                    <BiEdit className="text-blue-500" />
                  </div>
                  <div className="mx-1 w-10 text-center flex items-center justify-center">
                    <GiNetworkBars className="text-blue-500" />
                  </div>
                  <div className="w-10 text-center flex items-center justify-center">
                    <RiDeleteBin5Line className="text-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <nav>
            <ul className="flex items-center">
              <li className="mr-2 bg-white border-gray-500 rounded py-2 px-3">
                <a href="#">
                  <RiArrowLeftSFill />
                </a>
              </li>
              <li className="mr-1 bg-white border-gray-500 rounded py-1 px-3">
                <a href="#">1</a>
              </li>
              <li className="mr-1 bg-white border-gray-500 rounded py-1 px-3 hover:bg-blue-500 hover:text-white">
                <a href="#">2</a>
              </li>
              <li className="mr-1 bg-white border-gray-500 rounded py-1 px-3">
                <a href="#">3</a>
              </li>
              <li className="mr-1 bg-white border-gray-500 rounded py-1 px-3">
                <a href="#">4</a>
              </li>
              <li className="mr-1 bg-white border-gray-500 rounded py-1 px-3">
                <a href="#">5</a>
              </li>
              <li className="mr-1 bg-white border-gray-500 rounded py-2 px-3">
                <a href="#">
                  <RiArrowRightSFill />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Dashboard>
  );
}

export default List;
