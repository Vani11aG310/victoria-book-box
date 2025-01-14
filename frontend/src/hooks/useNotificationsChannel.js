import { useEffect } from 'react';
import { createConsumer } from "@rails/actioncable";
import { ACTIONS } from "../reducers/dataReducer";

const useNotificationsChannel = (userId, setNotifications, dispatch) => {

  useEffect(() => {
    const consumer = createConsumer("ws://localhost:3001/cable");

    const notificationsChannel = consumer.subscriptions.create(
      {
        channel: "NotificationsChannel",
        user_id: userId,
      },
      {
        connected() {
          console.log("Connected to NotificationsChannel");
        },
        disconnected() {
          console.log("Disconnected from NotificationsChannel");
        },
        received(data) {
          console.log("Received data:", data);

          dispatch({
            type: ACTIONS.CREATE_BOOK,
            collection: data.collection,
          });

          setNotifications((prev) => [...prev, {id: data.id, message: data.message, collection: data.collection}]);
        }
      }
    );

    return () => {
      notificationsChannel.unsubscribe();
    };
  }, [userId]);
}

  export default useNotificationsChannel;
