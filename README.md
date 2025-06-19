# Online Library System

A modern, responsive web application built with React and Redux for managing and browsing books online. This project demonstrates a complete CRUD application with routing, state management, and form validation.

## 🌟 Features

### Home Page (15 marks)
- ✅ Welcome message and landing page design
- ✅ Book categories display (Fiction, Non-Fiction, Sci-Fi, Fantasy, Mystery)
- ✅ Popular books showcase with ratings
- ✅ Navigation bar with Home, Browse Books, and Add Book links

### Browse Books Page (20 marks)
- ✅ Complete book listing with dummy data
- ✅ Dynamic category filtering via URL routes (`/books/:category`)
- ✅ "View Details" links for each book
- ✅ Real-time search functionality by title or author
- ✅ Filter books by category with active state indicators

### Book Details Page (15 marks)
- ✅ Dynamic routing for individual books (`/book/:id`)
- ✅ Complete book information (title, author, description, rating, ISBN, publish year)
- ✅ "Back to Browse" navigation and browser back button support
- ✅ Related category links and action buttons

### Add Book Page (30 marks)
- ✅ Complete form for adding new books
- ✅ Redux integration for state management
- ✅ Automatic redirect after successful submission
- ✅ Comprehensive form validation:
  - Required field validation
  - Minimum length validation
  - Year range validation
  - ISBN format validation
- ✅ Real-time error feedback and form reset functionality

### 404 Page (10 marks)
- ✅ Custom "Page Not Found" route for undefined URLs
- ✅ Navigation links back to Home and Browse Books pages
- ✅ Modern, user-friendly design

## 🛠 Technologies Used

- **Frontend Framework**: React 18
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM v6
- **Styling**: Custom CSS with modern design patterns
- **Build Tool**: Vite (Modern, fast build tool)

## 🚀 Why Vite?

This project has been migrated from Create React App (CRA) to Vite for the following benefits:

- **⚡ Lightning Fast**: Instant server start and lightning-fast HMR (Hot Module Replacement)
- **🔧 Modern Build Tool**: Uses native ES modules and optimized build process
- **📦 Smaller Bundle**: More efficient code splitting and tree shaking
- **🔮 Future-Proof**: Built on modern web standards and actively maintained
- **🛠 Better Development Experience**: Faster builds and improved developer tools

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.0.0 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd online-library-system
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000).

### 4. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### 5. Preview Production Build

```bash
npm run preview
```

This serves the production build locally for testing.

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── BookCard.jsx    # Individual book display
│   ├── CategoryFilter.jsx # Category filtering
│   ├── Navbar.jsx      # Navigation component
│   └── SearchBar.jsx   # Search functionality
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── BrowseBooks.jsx # Book browsing page
│   ├── BookDetails.jsx # Individual book details
│   ├── AddBook.jsx     # Add new book form
│   └── NotFound.jsx    # 404 error page
├── store/              # Redux store
│   ├── store.js        # Store configuration
│   └── booksSlice.js   # Books state management
├── App.jsx             # Main application component
├── App.css             # Global styles
└── main.jsx            # Application entry point
```

## 🎨 Design Features

- **Modern UI/UX**: Clean, intuitive interface with gradient backgrounds
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, smooth transitions, and visual feedback
- **Accessibility**: Proper semantic HTML and keyboard navigation support
- **Professional Styling**: Consistent color scheme and typography

## 📚 Sample Data

The application includes 10 sample books across different categories:

- **Fiction**: To Kill a Mockingbird, 1984
- **Sci-Fi**: Dune, Foundation  
- **Non-Fiction**: Sapiens, The Lean Startup
- **Fantasy**: The Hobbit, Lord of the Rings
- **Mystery**: The Da Vinci Code, Gone Girl

## 🔧 Available Scripts

In the project directory, you can run:

- `npm run dev` - Runs the app in development mode with hot reload
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code quality issues

## 🌐 Routing Structure

- `/` - Home page
- `/books` - Browse all books
- `/books/:category` - Filter books by category
- `/book/:id` - Individual book details
- `/add-book` - Add new book form
- `/*` - 404 page for invalid routes

## ✨ Key Features Demonstration

### Redux State Management
- Global state for books collection
- Actions for adding books, filtering, and searching
- Persistent state across page navigation

### Form Validation
- Real-time validation feedback
- Custom error messages
- Form reset functionality
- Loading states during submission

### Dynamic Routing
- Category-based URL filtering
- Book detail pages with unique URLs
- Browser navigation support

### Search & Filter
- Real-time search as you type
- Category-based filtering
- Combined search and category filters

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Built with ❤️ for the React Assignment

---





https://github.com/Neelima-cell/online-library-system