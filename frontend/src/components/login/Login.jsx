import "../../styles/login/Login.scss";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import usePageTitle from "../../hooks/usePageTitle";
import useUsersDataFetch from "../../hooks/useUsersDataFetch";
import wishlistDataFetch from "../../db/wishlists/wishlistDataFetch";
import { ACTIONS } from "../../reducers/dataReducer";

const Login = () => {
  const state = useContext(StateContext);
  const currentUserId = state.userData.id;
  const [userId, setUserId] = useState(currentUserId);
  const navigate = useNavigate();
  
  const dispatch = useContext(DispatchContext);
  usePageTitle("Login", dispatch);
  
  // Custom hook to fetch the list of Users.
  const { users, loading, error } = useUsersDataFetch();
  
  useEffect(() => {
    setUserId(currentUserId);
  }, [currentUserId]);

  const handleUserIdChange = (event) => {
    setUserId(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUserId = Number(event.target.userId.value)
    setUserId(newUserId);

    // Update the global state with the new User.
    const newUser = users.find((user) => user.id === newUserId);
    dispatch({
      type: ACTIONS.SET_USER,
      payload: newUser,
    })

    // If the userId is changed, we need to refresh the Wishlist.
    wishlistDataFetch(newUserId, dispatch);

    // Return to the previous page.
    navigate(-1);
  }

  return (
    <div>
      <form className="login__form" onSubmit={handleSubmit}>
        <div className="login__input-group">
          <label htmlFor="userId" className="login__label">User</label>
          <select 
            name="userId" 
            className="login__input"
            value={userId} 
            onChange={handleUserIdChange}
            >
            {Array.isArray(users) && users.map((user) => {
              return <option key={user.id} value={user.id}>{user.name}</option>;
            })}
          </select>
        </div>
        <div className="login__button-group">
          <button type="submit" className="login__submit-button">Save</button>
        </div>
      </form>
    </div>
  );
}

export default Login;