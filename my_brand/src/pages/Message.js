
export default function Message() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded px-2 pt-2 pb-2 mb-4 w-4/5 md:w-2/5 lg:w-1/4 md:px-8">
        <div className="flex justify-center font-bold text-2xl text-primary font-serif">
          <h1 className="p-8">Want to chat?</h1>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-4  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"

          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Enter your message"

          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-primary hover:bg-lime-600 text-gray-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline sm:px-8"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
