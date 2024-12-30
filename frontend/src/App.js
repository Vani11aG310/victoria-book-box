import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.scss";
import { useEffect, useState } from "react";
import BookList from "./components/books/BookList";
import BookSearch from "./components/books/BookSearch";
import Book from "./components/books/Book";
import BookBoxList from "./components/book-boxes/BookBoxList";
import BookBoxCreate from "./components/book-boxes/BookBoxCreate";
import BookBox from "./components/book-boxes/BookBox";
import Wishlist from "./components/wishlists/Wishlist";
import WishlistSearch from "./components/wishlists/WishlistSearch";

function App() {
  const [userId, setUserId] = useState(process.env.REACT_APP_USER_ID);


  return (
    <div className="App">
      <header className="App-header">
        <h4>Victoria Book Box</h4>
      </header>
      <Router> 
        <Routes>
          <Route path="/books" element={<BookList />} />          
          <Route path="/books/search" element={<BookSearch/>} />          
          <Route path="/books/:id" element={<Book />} />    

          <Route path="/book-boxes" element={<BookBoxList />} />          
          <Route path="/book-boxes/create" element={<BookBoxCreate />} />          
          <Route path="/book-boxes/:id" element={<BookBox />} />          
         
          <Route path="/wishlist" element={<Wishlist userId={userId} />} />          
          <Route path="/wishlist/search" element={<WishlistSearch />} />          
        </Routes>
      </Router>
      <footer className="App-footer">
        <h6>Bottom Nav Bar</h6>
      </footer>
    </div>
  );
}

export default App;
