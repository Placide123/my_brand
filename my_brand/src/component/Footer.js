
export default function Footer() {

  return (
  <>
  <div className="flex  flex-col justify-center items-center bg-primary h-[30vh] p-2 font-serif text-justify">
    <div>
      <h1 className="p-4 text-base ">Subscribe to my website to receive notifications of updates to my work.</h1>
      <form className="flex">
      <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"

          />
            <button
            className="bg-gray-200 border-2 text-primary hover:bg-lime-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline sm:px-8"
            type="submit"
          >
            Subscribe
          </button>
      </form>
    </div>
      <h1 className="p-4">Designed by Placide TWIRINGIYIMANA</h1>
  </div>
  </>
  );
}
