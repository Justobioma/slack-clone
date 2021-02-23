import React from "react";
import "./Message.css";

function message({ message, timestamp, username, userimage }) {
  return (
    <div className="message">
      <img src={userimage} alt="" />
      <div className="message_info">
        <h4>
          {username}{" "}
          <span className="message_time">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default message;
