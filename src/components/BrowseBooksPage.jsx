import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RatingStar from "./RatingStar";

const BrowseBooksPage = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const dummyBooks = useSelector((state) => state.books.dummyBooks);

  const filteredBooks = books.books.filter(
    (book) => book.category === category || category === undefined
  );
  const filteredDummyBooks = dummyBooks.filter(
    (book) => book.category === category || category === undefined
  );

  const [searchTerm, setSearchTerm] = useState("");

  const searchResults = filteredBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const dummySearchResults = filteredDummyBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div>
        <div className="flex flex-col items-center p-2 py-6 m-h-screen">
          <div
            className="bg-white items-center justify-between w-full flex rounded-full shadow-lg p-2 mb-5 sticky"
            style={{ top: 5 }}
          >
            <div>
              <div className="p-2 mr-1 rounded-full hover:bg-gray-100 cursor-pointer">
                <Link to={"/"}>
                  <svg
                    className="h-6 w-6 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <input
              className="font-bold uppercase rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
              type="text"
              value={searchTerm}
              placeholder="Search by Title or Author"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/*  */}

      {category ? (
        <div className="flex justify-center">
          <h1
            className=" 
          text-2xl
          md:text-3xl
          pl-2
          my-2
          border-l-4
          font-sans
          font-bold
          border-green-500
          dark:text-gray-600"
          >
            Books in {category}
          </h1>
        </div>
      ) : null}
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {searchResults.map((book) => (
            <div key={book.id} className="rounded overflow-hidden shadow-lg">
              <a href="#" />
              <div className="relative">
                <Link to={`/book-details/${book.id}`}>
                  <img
                    className="w-full"
                    src={book.imageUrl}
                    alt="Sunset in the mountains"
                  />
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                </Link>
              </div>
              <div className="px-6 py-4">
                <Link
                  to={`/book-details/${book.id}`}
                  className="font-semibold text-lg inline-block hover:text-green-600 transition duration-500 ease-in-out"
                >
                  {book.title}
                </Link>
                <p className="text-black text-sm pb-3">
                  By <strong> {book.author}</strong>
                </p>
                <p className="text-gray-500 text-sm">{book.description}</p>
              </div>
              <div className="px-6 pb-4 flex flex-row items-center">
                <p>Rating: {RatingStar(book.rating)}</p>
              </div>
            </div>
          ))}
          {dummySearchResults.map((book) => (
            <div key={book.id} className="rounded overflow-hidden shadow-lg">
              <a href="#" />
              <div className="relative">
                <Link to={`/dummybook-details/${book.id}`}>
                  <img
                    className="w-full"
                    src={book.imageUrl}
                    alt="Sunset in the mountains"
                  />
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                </Link>
              </div>
              <div className="px-6 py-4">
                <Link
                  to={`/dummybook-details/${book.id}`}
                  className="font-semibold text-lg inline-block hover:text-green-600 transition duration-500 ease-in-out"
                >
                  {book.title}
                </Link>
                <p className="text-black text-sm pb-3">
                  By <strong> {book.author}</strong>
                </p>
                <p className="text-gray-500 text-sm">{book.description}</p>
              </div>
              <div className="px-6 pb-4 flex flex-row items-center">
                <p>Rating: {RatingStar(book.rating)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseBooksPage;
