import { useEffect } from 'react';
import { createConsumer } from "@rails/actioncable";

const useNotificationsChannel = (userId) => {

  useEffect(() => {
    const consumer = createConsumer("ws://localhost:3001/cable");

    const notificationsChannel = consumer.subscriptions.create(
      {
        channel: "NotificationsChannel",
        user_id: userId,
      },
      {
        connected() {
          console.log("*** Connected to NotificationsChannel");
        },
        disconnected() {
          console.log("*** Disconnected from NotificationsChannel");
        },
        received(data) {
          console.log("*** Received data:", data);
        }
      }
    );

    return () => {
      notificationsChannel.unsubscribe();
    };
  }, [userId]);
}

  export default useNotificationsChannel;
