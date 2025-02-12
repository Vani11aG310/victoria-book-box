import "../../styles/notification/Notification.scss";
import NotificationItem from "./NotificationItem";
import { useState, useContext } from "react";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import useNotificationsChannel from '../../hooks/useNotificationsChannel';

const Notification = () => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  const userId = state.userData.id;
  const [notifications, setNotifications] = useState([]);

   // Custom Hook to set up Notifications Channel with Rails backend.
   useNotificationsChannel(userId, setNotifications, dispatch);
  
   // Return an empty component if there are no notifications.
   if (!notifications || notifications.length === 0) {
    return (null)
   }

   return (
    <div>
      <ul className="notification">
        {Array.isArray(notifications) && notifications.map((notification) => {
          return <NotificationItem key={notification.id} notification={notification} setNotifications={setNotifications} />;
        })}
      </ul>
    </div>
  );
}

export default Notification;