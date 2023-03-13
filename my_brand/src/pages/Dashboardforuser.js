import React, { useState } from "react";
import Dashboard from "../component/Dashboard";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";


export default function TableUser() {

    const [editDataModel, setEditDataModel] = useState(false);
    const [deleDataModel, setDelDataModel] = useState(false);
    const editModel = () => {
        let newState = !editDataModel;
        setEditDataModel(newState);
    };

    const deleteModel = () => {
      let newState = !deleDataModel;
      setDelDataModel(newState);
    };

    return (
        <Dashboard>

            {/* ====================== Start::  EditDataModel =============================== */}

            <div
                className={`min-h-full -ml-72 -mt-14 w-screen z-50 bg-opacity-30 backdrop-blur-sm fixed flex items-center justify-center px-4 ${editDataModel === true ? "block" : "hidden"
                    }`}
            >
                <div className="bg-white w-1/2 shadow-2xl rounded-lg p-4 pb-8">
                    <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
                        <h1 className="font-bold text-sm text-center w-11/12">
                            Add a Blog
                        </h1>
                        <hr className=" bg-primary border-b w-full" />
                    </div>
                    <div className="card-body">
                        <form className=" px-8">
                            <div>
                                <div className="flex flex-col">
                                    <label className="block mb-2 text-sm font-medium text-black">Blog Title</label>
                                    <input type="text" placeholder="Blog Title" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 mb-2"></input>
                                </div>
                                <div className="flex flex-col">

                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Your picture</label>
                                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none" id="file_input" type="file"></input>
                                </div>
                                <div className="flex flex-col">
                                    <label className="block mb-2 text-sm font-medium text-black">Blog Description</label>
                                    <textarea type="password" placeholder="Blog Description" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 mb-2"></textarea>
                                </div>
                            </div>
                            <div className="w-full flex">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                                    Add Blog
                                </button>
                                <button
                                    className="border-2 border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                                    onClick={(e) => editModel(e.preventDefault())}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* =========================== End::  editDataModel =============================== */}

             {/* ====================== Start::  deleteDataModel =============================== */}

      <div
        className={`min-h-full -ml-72 -mt-14 w-screen z-50 bg-opacity-30 backdrop-blur-sm fixed flex items-center justify-center px-4 ${deleDataModel === true ? "block" : "hidden"
          }`}
      >
        <div className="bg-white w-1/2 shadow-2xl rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h1 className="font-bold text-sm text-center w-11/12">
              Add a Blog
            </h1>
            <hr className=" bg-primary border-b w-full" />
          </div>
          <div className="card-body">
            <form className=" px-8">
              <div>
                <div className="flex flex-col">
                  <label className="block mb-2 text-sm font-medium text-black">Blog Title</label>
                  <input type="text" placeholder="Blog Title" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 mb-2"></input>
                </div>
                <div className="flex flex-col">

                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Your picture</label>
                  <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none" id="file_input" type="file"></input>
                </div>
                <div className="flex flex-col">
                  <label className="block mb-2 text-sm font-medium text-black">Blog Description</label>
                  <textarea type="password" placeholder="Blog Description" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 mb-2"></textarea>
                </div>
              </div>
              <div className="w-full flex">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Delete
                </button>
                <button
                  className="border-2 border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                  onClick={(e) => deleteModel(e.preventDefault())}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  deleteDataModel =============================== */}


            <div class="relative overflow-x-auto shadow-md sm:rounded-lg px-8">
                <h1 className=" border-b border-gray-300 font-bold text-blue-800 mb-24 mt-4">
                    List of Users Registered
                </h1>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-300">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                FirstName
                            </th>
                            <th scope="col" class="px-6 py-3">
                                LastName
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Password
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                                Silver
                            </td>
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    <ul className=" flex gap-2 text-primary text-xl">
                                        <li><AiFillEdit onClick={editModel} /></li>
                                        <li><AiFillDelete onClick={deleteModel}/></li>

                                    </ul></a>
                            </td>
                        </tr>
                        <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td class="px-6 py-4">
                                White
                            </td>
                            <td class="px-6 py-4">
                                Laptop PC
                            </td>
                            <td class="px-6 py-4">
                                $1999
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 hover:underline">
                                    <ul className=" flex gap-2 text-primary text-xl">
                                        <li><AiFillDelete /></li>
                                        <li><AiFillEdit /></li>
                                    </ul>
                                </a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td class="px-6 py-4">
                                Black
                            </td>
                            <td class="px-6 py-4">
                                Accessories
                            </td>
                            <td class="px-6 py-4">
                                $99
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">

                                    <ul className=" flex gap-2 text-primary text-xl">
                                        <li><AiFillDelete /></li>
                                        <li><AiFillEdit /></li>
                                    </ul></a>
                            </td>
                        </tr>
                        <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Google Pixel Phone
                            </th>
                            <td class="px-6 py-4">
                                Gray
                            </td>
                            <td class="px-6 py-4">
                                Phone
                            </td>
                            <td class="px-6 py-4">
                                $799
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">

                                    <ul className=" flex gap-2 text-primary text-xl">
                                        <li><AiFillDelete /></li>
                                        <li><AiFillEdit /></li>
                                    </ul></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple Watch 5
                            </th>
                            <td class="px-6 py-4">
                                Red
                            </td>
                            <td class="px-6 py-4">
                                Wearables
                            </td>
                            <td class="px-6 py-4">
                                $999
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    <ul className=" flex gap-2 text-primary text-xl">
                                        <li><AiFillDelete /></li>
                                        <li><AiFillEdit /></li>
                                    </ul></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </Dashboard>
    );
}
