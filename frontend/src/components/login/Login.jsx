import "../../styles/login/Login.scss";
import { useState, useEffect, useContext } from "react";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import usePageTitle from "../../hooks/usePageTitle";
import useUserDataFetch from "../../hooks/useUserDataFetch";
import { ACTIONS } from "../../reducers/dataReducer";

const Login = () => {
  const state = useContext(StateContext);
  const currentUserId = state.userId || undefined;

  const [userId, setUserId] = useState(currentUserId);
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    setUserId(currentUserId);
  }, [currentUserId]);

  const dispatch = useContext(DispatchContext);
  usePageTitle("Login", dispatch);

  // Custom hook to fetch the list of Users.
  useUserDataFetch(setUsers);

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserId(event.target.userId.value);

    dispatch({
      type: ACTIONS.SET_USER,
      userId,
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