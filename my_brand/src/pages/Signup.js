import { NavLink } from "react-router-dom";

export default function Signup() {
    return (
        <div className="bg-gray-100 ">
            <div className="flex flex-col items-center justify-center mx-auto h-screen md:h-screen lg:py-0 border-2 border-white">
            <h1 className="flex justify-center items-center mb-6">TWC</h1>
                <h1 className="block mb-2 sm:text-sm font-medium text-white text-xl md:text-2xl "> Create your account</h1>
                <form className="space-y-4 md:space-y-6 h-196 w-10/12 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 mt-4 lg:p-8  shadow-2xl rounded">
                    <div className="flex flex-col">
                        <label className="block mb-2 text-sm font-medium text-white ">FirstName</label>
                        <input type="text" placeholder="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="block mb-2 text-sm font-medium text-white ">LastName</label>
                        <input type="text" placeholder="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="block mb-2 text-sm font-medium text-white ">Email</label>
                        <input type="text" placeholder="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="block mb-2 text-sm font-medium text-white">Password</label>
                        <input type="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"></input>
                    </div>
                    <button className="w-full text-gray-200 bg-primary hover:bg-lime-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">SIGN UP</button>
                    <p className="text-sm font-light text-white">
                        Already have an account?
                        <NavLink to="/login" className="font-medium text-primary-600 hover:underline"><span className="underline pl-2 font-medium">LOGIN</span></NavLink>
                    </p>
                </form>
            </div>
        </div>
    );
}
