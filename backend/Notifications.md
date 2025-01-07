That sounds like a fantastic project! To build a messaging system that sends near-real-time notifications, you can use **ActionCable** in Ruby on Rails for the backend and **WebSockets** for real-time communication with your React frontend. Here’s a high-level overview of the steps you can take:

### Backend (Ruby on Rails)
1. **Set Up ActionCable**:
   - Generate a channel for notifications:
     ```bash
     rails generate channel Notifications
     ```
   - Define the channel logic in `app/channels/notifications_channel.rb`:
     ```ruby
     class NotificationsChannel < ApplicationCable::Channel
       def subscribed
         stream_from "notifications_#{params[:user_id]}"
       end
     end
     ```

2. **Broadcast Notifications**:
   - In your controller or model where the book return is handled, broadcast a notification:
     ```ruby
     ActionCable.server.broadcast "notifications_#{user.id}", message: "The book you were watching has been returned!"
     ```

### Frontend (React)
1. **Set Up WebSocket Connection**:
   - Use a library like `actioncable` to connect to the WebSocket:
     ```javascript
     import { createConsumer } from "@rails/actioncable";

     const cable = createConsumer("ws://your-rails-app.com/cable");

     const notificationsChannel = cable.subscriptions.create(
       { channel: "NotificationsChannel", user_id: currentUser.id },
       {
         received(data) {
           console.log(data.message);
           // Handle the received message (e.g., display a notification)
         }
       }
     );
     ```

2. **Display Notifications**:
   - Use React state to manage and display notifications:
     ```javascript
     const [notifications, setNotifications] = useState([]);

     useEffect(() => {
       notificationsChannel.received = (data) => {
         setNotifications((prev) => [...prev, data.message]);
       };
     }, []);

     return (
       <div>
         {notifications.map((notification, index) => (
           <div key={index}>{notification}</div>
         ))}
       </div>
     );
     ```

### Additional Resources
- [Building a Real-Time Chat App in Rails Using ActionCable and Turbo](https://www.honeybadger.io/blog/chat-app-rails-actioncable-turbo/)[1](https://www.honeybadger.io/blog/chat-app-rails-actioncable-turbo/)
- [Building a Messaging Feature in Rails & React](https://medium.com/@amh03160/building-a-messaging-feature-in-rails-react-d672f887fd3)[2](https://medium.com/@amh03160/building-a-messaging-feature-in-rails-react-d672f887fd3)

These resources should help you get started with integrating real-time notifications into your library app. If you have any specific questions or run into issues, feel free to ask!