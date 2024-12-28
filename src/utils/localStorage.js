// loading books from local storage as a separate function and exporting it as named export //
import { dummyBooks } from "./dummyBooks";
export const loadBooksFromLocalStorage = () => {
  try {
    const books = JSON.parse(localStorage.getItem("books"));
    return books ? books : [];
  } catch (error) {
    console.error("failed to laod books from localstorage", error);
    return [];
  }
};

// saving the books to local storage //
export const saveBooksToLocalStorage = (books) => {
  try {
    localStorage.setItem("books", JSON.stringify(books));
  } catch (error) {
    console.error("failed to save books to localStorage", error);
  }
};
export const loadDummyBooksFromLocalStorage = () => {
  try {
    const dummyBooks = JSON.parse(localStorage.getItem("dummybooks"));
    return dummyBooks ? dummyBooks : [];
  } catch (error) {
    console.error("failed to laod books from localstorage", error);
    return [];
  }
};

// saving the books to local storage //
export const saveDummyBooksToLocalStorage = (dummyBooks) => {
  try {
    localStorage.setItem("dummybooks", JSON.stringify(dummyBooks));
  } catch (error) {
    console.error("failed to save books to localStorage", error);
  }
};
