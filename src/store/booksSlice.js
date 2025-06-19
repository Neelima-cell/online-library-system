import { createSlice } from '@reduxjs/toolkit';

// Dummy books data
const initialBooksData = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    description: "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice.",
    rating: 4.8,
    isPopular: true,
    publishYear: 1960,
    isbn: "978-0-06-112008-4"
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    category: "Fiction",
    description: "A dystopian social science fiction novel that explores the consequences of totalitarianism, mass surveillance, and repressive regimentation.",
    rating: 4.7,
    isPopular: true,
    publishYear: 1949,
    isbn: "978-0-452-28423-4"
  },
  {
    id: 3,
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
    description: "A science fiction epic set in the distant future amidst a feudal interstellar society in which various noble houses control planetary fiefs.",
    rating: 4.6,
    isPopular: true,
    publishYear: 1965,
    isbn: "978-0-441-17271-9"
  },
  {
    id: 4,
    title: "Foundation",
    author: "Isaac Asimov",
    category: "Sci-Fi",
    description: "A cycle of five interrelated stories that chronicle the efforts of Hari Seldon to save civilization through psychohistory.",
    rating: 4.5,
    isPopular: false,
    publishYear: 1951,
    isbn: "978-0-553-29335-0"
  },
  {
    id: 5,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "Non-Fiction",
    description: "A narrative of humanity's creation and evolution that explores how biology and history have defined us and enhanced our understanding of what it means to be human.",
    rating: 4.4,
    isPopular: true,
    publishYear: 2011,
    isbn: "978-0-06-231609-7"
  },
  {
    id: 6,
    title: "The Lean Startup",
    author: "Eric Ries",
    category: "Non-Fiction",
    description: "A methodology for developing businesses and products that aims to shorten product development cycles and rapidly discover if a proposed business model is viable.",
    rating: 4.2,
    isPopular: false,
    publishYear: 2011,
    isbn: "978-0-307-88789-4"
  },
  {
    id: 7,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    description: "A children's fantasy novel about a hobbit who undertakes a quest to win treasure guarded by Smaug the dragon.",
    rating: 4.9,
    isPopular: true,
    publishYear: 1937,
    isbn: "978-0-547-92822-7"
  },
  {
    id: 8,
    title: "Lord of the Rings",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    description: "An epic high fantasy novel about the quest to destroy the One Ring and defeat the Dark Lord Sauron.",
    rating: 4.8,
    isPopular: true,
    publishYear: 1954,
    isbn: "978-0-618-57398-0"
  },
  {
    id: 9,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    category: "Mystery",
    description: "A mystery thriller novel that follows symbologist Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris.",
    rating: 4.1,
    isPopular: false,
    publishYear: 2003,
    isbn: "978-0-307-47492-1"
  },
  {
    id: 10,
    title: "Gone Girl",
    author: "Gillian Flynn",
    category: "Mystery",
    description: "A psychological thriller about a man whose wife disappears on their fifth wedding anniversary, and he becomes the prime suspect.",
    rating: 4.3,
    isPopular: false,
    publishYear: 2012,
    isbn: "978-0-307-58836-4"
  }
];

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: initialBooksData,
    filteredBooks: initialBooksData,
    categories: ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy', 'Mystery'],
    searchTerm: '',
    selectedCategory: 'All',
  },
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        ...action.payload,
        id: Date.now(), // Simple ID generation
        rating: 0,
        isPopular: false,
      };
      state.books.push(newBook);
      state.filteredBooks = state.books;
    },
    filterByCategory: (state, action) => {
      const category = action.payload;
      state.selectedCategory = category;
      
      if (category === 'All') {
        state.filteredBooks = state.books;
      } else {
        state.filteredBooks = state.books.filter(book => book.category === category);
      }
      
      // Apply search term if exists
      if (state.searchTerm) {
        state.filteredBooks = state.filteredBooks.filter(book =>
          book.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(state.searchTerm.toLowerCase())
        );
      }
    },
    searchBooks: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.searchTerm = searchTerm;
      
      let booksToFilter = state.selectedCategory === 'All' 
        ? state.books 
        : state.books.filter(book => book.category === state.selectedCategory);
      
      if (searchTerm) {
        state.filteredBooks = booksToFilter.filter(book =>
          book.title.toLowerCase().includes(searchTerm) ||
          book.author.toLowerCase().includes(searchTerm)
        );
      } else {
        state.filteredBooks = booksToFilter;
      }
    },
    clearSearch: (state) => {
      state.searchTerm = '';
      if (state.selectedCategory === 'All') {
        state.filteredBooks = state.books;
      } else {
        state.filteredBooks = state.books.filter(book => book.category === state.selectedCategory);
      }
    }
  },
});

export const { addBook, filterByCategory, searchBooks, clearSearch } = booksSlice.actions;

export const selectAllBooks = (state) => state.books.books;
export const selectFilteredBooks = (state) => state.books.filteredBooks;
export const selectPopularBooks = (state) => state.books.books.filter(book => book.isPopular);
export const selectCategories = (state) => state.books.categories;
export const selectBookById = (state, bookId) => state.books.books.find(book => book.id === parseInt(bookId));
export const selectSearchTerm = (state) => state.books.searchTerm;
export const selectSelectedCategory = (state) => state.books.selectedCategory;

export default booksSlice.reducer; 