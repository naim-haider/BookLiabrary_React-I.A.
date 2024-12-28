import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import RatingStar from "./RatingStar";
import { deleteBook } from "../redux/booksSlice";
import { useDispatch } from "react-redux";

const BookDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const book = useSelector((state) =>
    state.books.books.find((b) => b.id === parseInt(id))
  );

  if (!book) {
    return <h2 className="text-center my-40">Book not found</h2>;
  }

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteBook(book.id));

    navigate("/browse-books");
  };

  return (
    <>
      <div className="min-w-screen min-h-screen bg-green-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div className="p-2 relative bottom-8 -left-8 inline-block  mr-1 rounded-full hover:bg-gray-100 cursor-pointer">
            <Link to={"/browse-books"}>
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
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative">
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="w-full relative z-10"
                />
                <div className="border-4 border-green-200 absolute transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 bg-green-200 -top-6 -bottom-6 left-10 right-10 z-0" />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <h1 className="font-bold uppercase text-2xl mb-1">
                  {book.title}
                </h1>
                <h2 className="ml-2 mb-5">
                  by{" "}
                  <span className="font-semibold ml-1 uppercase text-xl ">
                    {book.author}
                  </span>
                </h2>
                <p className="text-sm mb-2">{book.description}</p>
                <p>
                  <strong>Rating:</strong> {RatingStar(book.rating)}
                </p>
              </div>
              <div className="flex justify-evenly">
                <div className="inline-block align-bottom">
                  <Link to={`/edit-book/${book.id}`}>
                    <button className="bg-green-300 opacity-75 hover:opacity-100 text-green-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                      <i className="mdi mdi-cart -ml-2 mr-2" /> Update
                    </button>
                  </Link>
                </div>
                <div className="inline-block align-bottom">
                  <button
                    onClick={handleDelete}
                    className="bg-red-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"
                  >
                    <i className="mdi mdi-cart -ml-2 mr-2" /> Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetailsPage;
