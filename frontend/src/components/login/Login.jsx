import "../../styles/login/Login.scss";
import { useState, useEffect, useContext } from "react";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import usePageTitle from "../../hooks/usePageTitle";
import useUsersDataFetch from "../../hooks/useUsersDataFetch";
import { ACTIONS } from "../../reducers/dataReducer";

const Login = () => {
  const state = useContext(StateContext);
  const currentUserId = state.user.id || undefined;

  console.log("*** Current User:", currentUserId)
  const [userId, setUserId] = useState(currentUserId);
  const [users, setUsers] = useState([]);
  
    const dispatch = useContext(DispatchContext);
  usePageTitle("Login", dispatch);
  
  // Custom hook to fetch the list of Users.
  useUsersDataFetch(setUsers);
  
  useEffect(() => {
    setUserId(currentUserId);
  }, [currentUserId]);

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUserId = event.target.userId.value
    setUserId(newUserId);

    // Update the global state with the new User.
    const user = users.find((user) => user.id = newUserId);
    console.log("***New User:", user)
    dispatch({
      type: ACTIONS.SET_USER,
      payload: user,
    })
  }

  return (
    <div>
      <form className="login__form" onSubmit={handleSubmit}>
        <label htmlFor="userId" className="login__userid-label">User:</label>
        <select 
          name="userId" 
          className="login__userid"
          value={userId} 
          onChange={handleUserIdChange}
          >
          {Array.isArray(users) && users.map((user) => {
            return <option key={user.id} value={user.id}>{user.name}</option>;
          })}
        </select>
        <button type="submit" className="login__submit-button">Save</button>
      </form>
    </div>
  );
}

export default Login;