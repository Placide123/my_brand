import { NavLink } from "react-router-dom";

export default function Login() {
    return (
        <div className="bg-[url('https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')] bg-cover">
            <div className="flex flex-col items-center justify-center px-12 py-24 mx-auto md:h-screen lg:py-0 border-2 border-white">
            <h1 className="block mb-2 text-sm font-medium text-white text-xl ">Sign in to your account</h1>
                <form className="space-y-8 md:space-y-6  h-96 w-96 p-4 mt-4">
                    <div className="flex flex-col">
                        <label className="block mb-2 text-sm font-medium text-white ">Email</label>
                        <input type="text" placeholder="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="block mb-2 text-sm font-medium text-white">Password</label>
                        <input type="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"></input>
                    </div>
                    <button className="w-full text-white bg-lime-300 hover:bg-lime-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"><NavLink to="/dashboard" class="font-medium text-primary-600 hover:underline"><span className="underline pl-2 font-medium">LOGIN</span></NavLink></button>
                    <p className="text-sm font-light text-white">
                      Don’t have an account yet?
                      <NavLink to="/signup" className="font-medium text-primary-600 hover:underline"><span className="underline pl-2 font-medium">SIGN UP</span></NavLink>
                  </p>
                </form>
            </div>
        </div>
    );
}
