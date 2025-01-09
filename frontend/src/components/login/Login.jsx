import "../../styles/login/Login.scss";
import { useState, useEffect, useContext } from "react";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import usePageTitle from "../../hooks/usePageTitle";
import useUsersDataFetch from "../../hooks/useUsersDataFetch";
import { ACTIONS } from "../../reducers/dataReducer";

const Login = () => {
  const state = useContext(StateContext);
  const currentUserId = state.userData.id || undefined;

  // console.log("***User", state.userData)

  // console.log("*** Current User:", currentUserId)
  const [userId, setUserId] = useState(currentUserId);
  
  const dispatch = useContext(DispatchContext);
  usePageTitle("Login", dispatch);
  
  // Custom hook to fetch the list of Users.
  const { users, loading, error } = useUsersDataFetch();
  
  // useEffect(() => {
  //   setUserId(currentUserId);
  // }, [currentUserId]);

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUserId = event.target.userId.value
    setUserId(newUserId);

    // Update the global state with the new User.
    console.log("***New User ID:", newUserId)
    const newUser = users.find((user) => user.id = newUserId);
    console.log("***New User:", newUser)
    // dispatch({
    //   type: ACTIONS.SET_USER,
    //   payload: user,
    // })
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