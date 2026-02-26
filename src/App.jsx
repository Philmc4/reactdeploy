import { useState } from "react";
import "./App.css";
import markWebber from "./assets/avatar-mark-webber.webp";
import rizkyHasan from "./assets/avatar-rizky-hasanuddin.webp";
import nathanPeterson from "./assets/avatar-nathan-peterson.webp";
import kimberlySmith from "./assets/avatar-kimberly-smith.webp";
import jacobThompson from "./assets/avatar-jacob-thompson.webp";
import angelaGray from "./assets/avatar-angela-gray.webp";
import annaKim from "./assets/avatar-anna-kim.webp";
import kimChess from "./assets/image-chess.webp";

function App() {
  const [notifications, setNotifications] = useState(3);
  const [unreadNotification, setUnreadNotification] = useState(true);
  return (
    <div className="bg-white main-container flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="font-Plus-Jakarta-Sans text-navy-950">
            Notifications
          </h1>
          <div className=" bg-blue-950 p-4 w-8 rounded-md">
            <p className="font-Plus-Jakarta-Sans text-white">{notifications}</p>
          </div>
        </div>
        <button
          onClick={() => {
            (setNotifications(0), setUnreadNotification(false));
          }}
          className="font-Plus-Jakarta-Sans text-gray-600 cursor-pointer hover:text-blue-950"
        >
          Mark all as read
        </button>
      </div>
      <NotificationContainer
        imageURL={markWebber}
        imageAlt={"Mark Webber profile image"}
        notificationName={"Mark Webber"}
        notificationActivity={"reacted to your recent post"}
        activityLink={"My first tournament today!"}
        activityTime={"1m"}
        notificationUnread={unreadNotification}
      />
      <NotificationContainer
        imageURL={angelaGray}
        imageAlt={"Angela Gray profile image"}
        notificationName={"Angela Gray"}
        notificationActivity={"followed you"}
        // activityLink={""}
        activityTime={"5m"}
        notificationUnread={unreadNotification}
      />
      <NotificationContainer
        imageURL={jacobThompson}
        imageAlt={"Jacob Thompson profile image"}
        notificationName={"Jacob Thompson"}
        notificationActivity={"Has joined your group"}
        activityLink={"Chess Club"}
        activityTime={"1 day"}
        notificationUnread={unreadNotification}
      />
      <NotificationContainer
        imageURL={rizkyHasan}
        imageAlt={"Rizky Hasanuddin profile image"}
        notificationName={"Rizky Hasanuddin"}
        notificationActivity={"sent you a private message"}
        // activityLink={""}
        activityTime={"5 days"}
        notificationUnread={false}
        privateMessage={
          "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game."
        }
      />
      <NotificationContainer
        imageURL={kimberlySmith}
        imageAlt={"Kimberly Smith profile image"}
        notificationName={"Kimberly Smith"}
        notificationActivity={"commented on your picture"}
        // activityLink={""}
        activityTime={"1 week"}
        notificationUnread={false}
        notificationImage={kimChess}
        notificationImageAlt={"Image of Kimberly Smith playing chess"}
      />
      <NotificationContainer
        imageURL={nathanPeterson}
        imageAlt={"Nathan Peterson profile image"}
        notificationName={"Nathan Peterson"}
        notificationActivity={"reacted to your recent post"}
        activityLink={"5 end-game strategies to increase your win rate"}
        activityTime={"2 weeks"}
        notificationUnread={false}
      />
      <NotificationContainer
        imageURL={annaKim}
        imageAlt={"Anna Kim profile image"}
        notificationName={"Anna Kim"}
        notificationActivity={"left the group"}
        activityLink={"Chess Club"}
        activityTime={"2 weeks"}
        notificationUnread={false}
      />
    </div>
  );
}

function NotificationContainer({
  imageURL,
  imageAlt,
  notificationName,
  notificationActivity,
  activityLink,
  activityTime,
  notificationUnread,
  privateMessage,
  notificationImage,
  notificationImageAlt,
}) {
  return (
    <div
      className={
        notificationUnread
          ? "unread-notification-container"
          : "read-notification-container"
      }
    >
      <img src={imageURL} alt={imageAlt} className="size-11" />
      <div className="flex flex-col gap-2 items-start font-Plus-Jakarta-Sans">
        <div className="notification-content-container">
          <p className="text-left">
            <span className="text-navy-950 font-bold cursor-pointer hover:text-blue-950">
              {notificationName}&nbsp;&nbsp;
            </span>
            <span className="text-gray-600 font-medium">
              {notificationActivity}&nbsp;&nbsp;
            </span>
            <span className="font-bold text-gray-600 cursor-pointer hover:text-blue-950">
              {activityLink}&nbsp;&nbsp;
            </span>
          </p>
          {notificationUnread && (
            <div className="size-2 bg-red-500 rounded-full"></div>
          )}
        </div>
        <p className="text-gray-500 ">{activityTime} ago</p>
        {privateMessage && (
          <div className="message-container cursor-pointer hover:bg-blue-100">
            <p className="font-Plus-Jakarta-Sans font-medium text-left text-gray-600 text-[16px]">
              {privateMessage}
            </p>
          </div>
        )}
      </div>
      {notificationImage && (
        <div className="notification-image">
          <img
            src={notificationImage}
            alt={notificationImageAlt}
            className="size-11"
          />
        </div>
      )}
    </div>
  );
}

export default App;
