import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className=" bg-white shadow-md shadow-gray-300 w-100 px-8 md:px-auto">
        <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
          <div className="text-[#3FFA00] md:order-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 hover:text-green-500 duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
          </div>
          <div className="text-black-500 order-3 w-full md:w-auto md:order-2">
            <ul className="flex font-semibold justify-between">
              <li className="md:px-4 md:py-2 text-green-500">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="md:px-4 md:py-2 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                <Link to="/browse-books">Browse Books</Link>
              </li>
              <li className="md:px-4 md:py-2 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                <Link to="/add-book">Add Book</Link>
              </li>
            </ul>
          </div>
          <div className="order-2 md:order-3">
            <img
              className="w-60"
              src="/cooltext471985231745488.png"
              alt="logo"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
