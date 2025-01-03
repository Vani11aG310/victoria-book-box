import { useState, useEffect } from "react";
import axios from "axios";


const useSearchOpenLibrary = (searchValue) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setResponse(null);
    setLoading(true);
    setError(null);

    axios.get(`https://openlibrary.org/search.json?q=${searchValue}&fields=key,title,author_name,cover_edition_key&limit=20`)
      .then((res) => {
        setLoading(false);
        setResponse(res.data.docs);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
        console.error("Error: ", err.message);
      });
    }, [searchValue]);

  return {
    books: response,
    loading,
    error,
  };
};

export default useSearchOpenLibrary;