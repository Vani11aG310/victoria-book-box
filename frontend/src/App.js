import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  useEffect(() => {
    axios.get("http://localhost:3001/api/wishlists/user_id/3")
      .then((res) => console.log(res.data))
      .catch((err) => {
        if (err.response) {
          console.error("Response error:", err.response);
        } else if (err.request) {
          console.error("Request error:", err.request);
        } else {
          console.error("General error:", err.message);
        }
      })
      ;
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Victoria Book Box</h1>
      </header>
    </div>
  );
}

export default App;
