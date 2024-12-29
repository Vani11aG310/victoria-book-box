import "./App.scss";
import { useEffect, useState } from "react";
import MyWishlist from "./routes/MyWishlistRoute";

function App() {
  const [userId, setUserId] = useState(process.env.REACT_APP_USER_ID);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Victoria Book Box</h1>
        <MyWishlist userId={userId}/>
      </header>
    </div>
  );
}

export default App;
