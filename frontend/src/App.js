import "./App.scss";
import { useEffect, useState } from "react";
import Wishlist from "./components/wishlists/Wishlist";

function App() {
  const [userId, setUserId] = useState(process.env.REACT_APP_USER_ID);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Victoria Book Box</h1>
        <Wishlist userId={userId}/>
      </header>
    </div>
  );
}

export default App;
