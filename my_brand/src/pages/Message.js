import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Message() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, form.current, {
        publicKey: process.env.YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }
  return (
    <div className="flex justify-center items-center h-screen md:h-[80%] w-%80 xl:w-80%">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col bg-white  border-none px-2 pt-2 pb-2  w-1/5 sm:w-[95%] sm:px-4 md:w-2/5 lg:w-2/5 md:px-8">
        <div className="flex justify-center font-bold text-xl text-primary font-serif">
          <h1 className="p-6">Want to Send a Message?</h1>
        </div>
        <label className='font-bold font-serif text-primary'>Name</label>
        <input type="text" name="user_name" className="shadow appearance-none border rounded w-full py-2 px-4  text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4" />
        <label className='font-bold font-serif text-primary'>Email</label>
        <input type="email" name="user_email" className="shadow appearance-none border rounded w-full py-2 px-4  text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4" />
        <label className='font-bold font-serif text-primary' >Message</label>
        <textarea name="message" placeholder="Write your Message here..." className="shadow appearance-none h-[50%] border rounded w-full p-2 px-4  text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4"/>
        <input type="submit" value="Send" className="bg-primary hover:bg-primary-600 text-gray-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline sm:px-8 my-4 " />
      </form>
    </div>

  );
}
