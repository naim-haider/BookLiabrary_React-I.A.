import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateBook } from "../redux/booksSlice";

const EditBookPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Finding the book
  const book = useSelector((state) =>
    state.books.books.find((book) => book.id === parseInt(id))
  );

  const [title, setTitle] = useState(book?.title || "");
  const [author, setAuthor] = useState(book?.author || "");
  const [category, setCategory] = useState(book?.category || "");
  const [description, setDescription] = useState(book?.description || "");
  const [rating, setRating] = useState(book?.rating || "");
  const [imageUrl, setImageUrl] = useState(book?.imageUrl || "");

  const handleUpdate = (e) => {
    e.preventDefault();
    if (title && author && category && description && rating && imageUrl) {
      const updatedBook = {
        id: book.id,
        title,
        author,
        category: category.toLocaleLowerCase(),
        description,
        rating: parseInt(rating),
        imageUrl,
      };
      dispatch(updateBook(updatedBook));
      navigate("/browse-books");
    } else {
      alert("Please fill out all fields");
    }
  };

  if (!book) {
    return <p>Book not found!</p>;
  }

  return (
    <>
      <form onSubmit={handleUpdate}>
        <div className="min-h-screen  bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-16">
              <div className="max-w-md mx-auto">
                <div className="p-2 mr-1 -ml-7 pb-3 -mt-9 w-10 rounded-full hover:bg-gray-100 cursor-pointer">
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
                <div>
                  <h1 className="text-2xl font-semibold">
                    Edit the Book{" "}
                    <span className="underline decoration-green-500">
                      {title}
                    </span>
                  </h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="title"
                        name="title"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                      <label
                        htmlFor="title"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Title
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="author"
                        name="author"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                      />
                      <label
                        htmlFor="author"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Author
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="category"
                        name="category"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                      />
                      <label
                        htmlFor="category"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Category
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="description"
                        name="description"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      />
                      <label
                        htmlFor="description"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Description
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="imgUrl"
                        name="imgUrl"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Image URL"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        required
                      />
                      <label
                        htmlFor="imgUrl"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Image URL
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="rating"
                        name="rating"
                        type="number"
                        min="1"
                        max="5"
                        step="1"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        required
                      />
                      <label
                        htmlFor="rating"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Rating
                      </label>
                    </div>
                    <div className="relative">
                      <button
                        type="submit"
                        className="bg-green-500 text-white hover:bg-green-600   rounded-md px-2 py-1"
                      >
                        Update Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditBookPage;
