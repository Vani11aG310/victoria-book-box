import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import BookList from "./components/books/BookList";
import BookSearch from "./components/books/BookSearch";
import Book from "./components/books/Book";
import BookBoxList from "./components/book-boxes/BookBoxList";
import BookBoxCreate from "./components/book-boxes/BookBoxCreate";
import BookBox from "./components/book-boxes/BookBox";
import Wishlist from "./components/wishlists/Wishlist";
import Search from "./components/search/Search";
import StateContext from "./context/StateContext";
import DispatchContext from "./context/DispatchContext";
import useApplicationData from './hooks/useApplicationData';
import useWishlistDataFetch from './hooks/useWishlistDataFetch';
import useUserData from './hooks/useUserData';
import useBooklistDataFetch from "./hooks/useBooklistDataFetch";


function App() {
  // Custom Hook to manage the Application's State.
  const { state, dispatch } = useApplicationData();
  
  // Custom Hook to set the User Data.
  // Assume for this project that the User ID is coming from an environment variable.
  const userId = Number(process.env.REACT_APP_USER_ID)
  useUserData(userId, dispatch);
  
  // Custom Hook to fetch the Wishlist Data for the User.
  useWishlistDataFetch(userId, dispatch);

  // Custom Hook to fetch the Booklist Data.
  useBooklistDataFetch(dispatch);

  return (
    <div className="App">
      <Router> 
        <DispatchContext.Provider value={dispatch}>
          <StateContext.Provider value={state}>
            <Header />
            <div className="main-content">
              <Routes>
                <Route path="/" element={<BookList />} />          
                <Route path="/books" element={<BookList />} />          
                <Route path="/books/search" element={<BookSearch />} />          
                <Route path="/books/:id" element={<Book />} />    

                <Route path="/book-boxes" element={<BookBoxList />} />          
                <Route path="/book-boxes/create" element={<BookBoxCreate />} />          
                <Route path="/book-boxes/:id" element={<BookBox />} />          
              
                <Route path="/wishlists" element={<Wishlist />} />          
                <Route path="/wishlists/search" element={<Search />} />
                <Route path="*" element={<h1>404 - Not Found</h1>} />          
              </Routes>
            </div>
            <Footer />
            </StateContext.Provider>
          </DispatchContext.Provider>
      </Router>
    </div>
  );
}

export default App;
