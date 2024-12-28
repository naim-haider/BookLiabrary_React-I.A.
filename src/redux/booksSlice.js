import { createSlice } from "@reduxjs/toolkit";
import { dummyBooks } from "../utils/dummyBooks";
import {
  loadBooksFromLocalStorage,
  saveBooksToLocalStorage,
  loadDummyBooksFromLocalStorage,
  saveDummyBooksToLocalStorage,
} from "../utils/localStorage";

saveDummyBooksToLocalStorage(dummyBooks);
// storing books load from local storage //
const initialBooks = loadBooksFromLocalStorage();
const initialDummyBooks = loadDummyBooksFromLocalStorage();

const booksSlice = createSlice({
  name: "books",
  initialState: {
    // first we are displaying the dummy books then the book which the user created using spread operator. //
    dummyBooks: [...initialDummyBooks],
    books: [...initialBooks],
    // books: [...initialBooks],
  },
  reducers: {
    // add book reducer
    addBook: (state, action) => {
      const newBook = {
        ...action.payload,
        id: Date.now(), // giving unique id by the time when the book is created //
      };
      state.books.push(newBook);
      saveBooksToLocalStorage(state.books);
    },
    // update book reducer //
    updateBook: (state, action) => {
      const index = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      if (index !== -1) {
        state.books[index] = action.payload;
        saveBooksToLocalStorage(state.books);
      }
    },
    // update book reducer //
    updateDummyBooks: (state, action) => {
      const index = state.dummyBooks.findIndex(
        (book) => book.id === action.payload.id
      );
      if (index !== -1) {
        state.dummyBooks[index] = action.payload;
        saveDummyBooksToLocalStorage(state.dummyBooks);
      }
    },
    // delete book reducer //
    deleteBook: (state, action) => {
      const newBooks = state.books.filter((book) => book.id !== action.payload);
      state.books = newBooks;
      saveBooksToLocalStorage(state.books);
    },
    // delete book reducer //
    deleteDummyBook: (state, action) => {
      const newBooks = state.dummyBooks.filter(
        (book) => book.id !== action.payload
      );
      state.dummyBooks = newBooks;
      saveDummyBooksToLocalStorage(state.dummyBooks);
    },
  },
});

export const {
  addBook,
  deleteBook,
  updateBook,
  updateDummyBooks,
  deleteDummyBook,
} = booksSlice.actions;
export default booksSlice.reducer;
