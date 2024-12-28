import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import BrowseBooksPage from "./components/BrowseBooksPage";
import BookDetailsPage from "./components/BookDetailsPage";
import AddBookPage from "./components/AddBookPage";
import PageNotFound from "./components/PageNotFound";
import { Provider } from "react-redux";
import store from "./redux/store";
import EditBookPage from "./components/EditBookPage";
import DummyBookDetailsPage from "./components/DummyBookComponents/DummyBookDetailsPage";
import EditDummyBookPage from "./components/DummyBookComponents/EditDummyBookPage";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/browse-books" element={<BrowseBooksPage />} />
            <Route path="/books/:category" element={<BrowseBooksPage />} />
            <Route path="/book-details/:id" element={<BookDetailsPage />} />
            <Route
              path="/dummybook-details/:id"
              element={<DummyBookDetailsPage />}
            />
            <Route path="/add-book" element={<AddBookPage />} />
            <Route path="/edit-book/:id" element={<EditBookPage />} />
            <Route
              path="/edit-dummy-book/:id"
              element={<EditDummyBookPage />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
