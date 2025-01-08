import "../../styles/notification/NotificationItem.scss";
import { FaCircleInfo, FaXmark } from "react-icons/fa6";

const NotificationItem = (props) => {
  const { notification, setNotifications } = props;

  const handleClose = () => {
    setNotifications((prev) => prev.filter((x) => x.id !== notification.id));
  }

  return (
    <div className="notification__item">
      <div className="notification__info">
        <FaCircleInfo className="notification__info-icon" />
      </div>
      <div className="notification__message-info">
        <p className="notification__message">{notification.message}</p>
      </div>
      <div className="notification__close-button">
        <FaXmark className="notification__close-icon" onClick={() => handleClose()} />
      </div>
    </div>
  );
}

export default NotificationItem;