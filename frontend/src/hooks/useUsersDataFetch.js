import { useState, useEffect } from "react";
import axios from "axios";

const useUsersDataFetch = (setUsers) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let users = [];

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios.get(`http://localhost:3001/api/users`)
      .then((res) => {
        setLoading(false);
        setUsers(res.data);
        users = res.data;
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
        console.error("Error: ", err.message);
      });
    }, []);

  return {
    users,
    loading,
    error,
  };
};

export default useUsersDataFetch;