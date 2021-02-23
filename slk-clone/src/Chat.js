import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import InfoIcon from "@material-ui/icons/Info";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import db from "./Firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  //const listener = ();

  useEffect(() => {
    //To dynamically fetch and display on the chat header, rooms from the database
    //using its roomId
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    //... to fetch and display messages from rooms in the database

    //const listener = db
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  //console.log(roomDetails);
  console.log("MESSAGES >>>", roomMessages);

  return (
    <div className="chat">
      <div className="chat_header">
        <div className="chat_headerleft">
          <h4 className="chat_channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderIcon />
          </h4>
        </div>

        <div className="chat_headerRight">
          <p>
            <InfoIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat_messages">
        {roomMessages.map(({ message, timestamp, username, userimage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            username={username}
            userimage={userimage}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId />
    </div>
  );
}

export default Chat;
