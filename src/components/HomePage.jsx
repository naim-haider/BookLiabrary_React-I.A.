import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RatingStar from "./RatingStar";

const HomePage = () => {
  const books = useSelector((state) => state.books.books);
  const dummyBooks = useSelector((state) => state.books.dummyBooks);

  const popularBooks = books.filter((book) => book.rating == 5);
  const popularDummyBooks = dummyBooks.filter((book) => book.rating == 5);

  return (
    <div>
      <div className="max-w-3xl mx-auto text-center mt-16">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-500">
            Welcome to Our Book Haven!
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-green-500"></span>
        </h1>
        <p className="text-lg text-gray-800 mb-8">
          Exploring the Wonderland of Literature: A journey through The Book
          Haven!
        </p>
      </div>
      {/*  */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            explore our <br /> Book{" "}
            <span className="underline decoration-purple-500">Categories</span>
          </h1>
          <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            Unveiling the Hidden Gem: Explore the Diverse World of Categories!
          </p>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 space-y-3 border-2 border-purple-400 dark:border-purple-300 rounded-xl">
              <span className="inline-block text-purple-500 dark:text-purple-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </span>
              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Fiction
              </h1>
              <p className="text-gray-500 dark:text-gray-300">
                Fiction books offer captivating stories with complex characters,
                imaginative plots, and emotional depth, providing an escape and
                sparking creativity.
              </p>
              <Link
                to="/books/fiction"
                className="inline-flex p-2 text-purple-500 capitalize transform bg-blue-100 rounded-full dark:bg-purple-500 dark:text-white hover:scale-110 transition hover:duration-500 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </div>
            <div className="p-8 space-y-3 border-2 border-purple-400 dark:border-purple-300 rounded-xl">
              <span className="inline-block text-purple-500 dark:text-purple-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </span>
              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Non-Fiction
              </h1>
              <p className="text-gray-500 dark:text-gray-300">
                Non-fiction books offer factual information, real-life stories,
                and insights on various topics, promoting learning, growth, and
                personal development.
              </p>
              <Link
                to="/books/non-fiction"
                className="inline-flex p-2 text-purple-500 capitalize transform bg-blue-100 rounded-full dark:bg-purple-500 dark:text-white hover:scale-110 transition hover:duration-500 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </div>
            <div className="p-8 space-y-3 border-2 border-purple-400 dark:border-purple-300 rounded-xl">
              <span className="inline-block text-purple-500 dark:text-purple-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </span>
              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Sci-Fi
              </h1>
              <p className="text-gray-500 dark:text-gray-300">
                Sci-fi books explore futuristic concepts, technology, and space,
                blending imagination with science, offering thrilling adventures
                and thought-provoking ideas.
              </p>
              <Link
                to="/books/sci-fi"
                className="inline-flex p-2 text-purple-500 capitalize transform bg-blue-100 rounded-full dark:bg-purple-500 dark:text-white hover:scale-110 transition hover:duration-500 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <h2 className="flex flex-row flex-nowrap items-center mt-10">
        <span className="flex-grow block border-t border-green-500" />
        <span className="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-green-500 text-white">
          Popular Books
        </span>
        <span className="flex-grow block border-t border-green-500" />
      </h2>

      {/*  */}

      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {popularBooks.length > 0 ? (
            <>
              {popularBooks.map((book) => (
                <div
                  key={book.id}
                  className="rounded overflow-hidden shadow-lg"
                >
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
            </>
          ) : (
            <div className="hidden">no book</div>
          )}
          {popularDummyBooks.length > 0 ? (
            <>
              {popularDummyBooks.map((book) => (
                <div
                  key={book.id}
                  className="rounded overflow-hidden shadow-lg"
                >
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
            </>
          ) : (
            <p className="text-center my-40">No Popular books found.</p>
          )}
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default HomePage;
