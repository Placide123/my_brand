import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export default function Message() {
  
  const form = useRef();

  const notify = () => toast.success("Message Sent");

  const sendEmail = async (e) => {
    e.preventDefault();

    await emailjs
      .sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, {
        publicKey: process.env.REACT_APP_YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
            notify();
            form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }
  return (
    <div className="flex justify-center flex-col md:flex-row items-center h-[115vh] md:h-[80vh] md:m-4  xl:w-[90%] gap-x-8">
      <div className='flex flex-col gap-y-2 mb-4 bg-gray-200 rounded-2xl shadow-2xl  border border-gray-200 px-2 pt-2 pb-2  w-[90%]   md:w-3/5 lg:w-2/5 md:px-8 lg:mx-2 space-y-4 font-serif lg:text-xl'>
        <h2>Phone Number: 0788347864</h2>
        <h2>Instagram: placide_twiringiyimana</h2>
        <h2>Email: castlewitty9@gmail.com</h2>
        <h2>placide_twiringiyimana</h2>
        

      </div>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col bg-gray-200 rounded-2xl shadow-2xl  border border-gray-200 px-2 pt-2 pb-2  w-[90%]   md:w-3/5 lg:w-2/5 md:px-8">
        <div className="flex justify-center flex-col font-bold text-xl text-primary font-serif">
          <h1 className="">Want to Hire Me?</h1>
          <h1 className='text-gray-500'>Send a Message</h1>
        </div>
        <label className='font-bold font-serif text-primary'>Name</label>
        <input type="text" name="user_name" className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2" />
        <label className='font-bold font-serif text-primary'>Email</label>
        <input type="email" name="user_email" className="shadow appearance-none border rounded w-full py-2 px-4  text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2" />
        <label className='font-bold font-serif text-primary' >Message</label>
        <textarea name="message" placeholder="Write your Message here..." className="shadow appearance-none p-2 h-32 border rounded w-full  px-4  text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4"/>
        <input type="submit" value="Send" className="bg-primary hover:bg-primary-600 text-gray-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline sm:px-8 my-2 " />
        <ToastContainer />
      </form>
    </div>

  );
}
