import { createContext, useState, useEffect } from "react";
import { io } from "socket.io-client";

export const chatContext = createContext();
const { Provider } = chatContext;

const ChatProvider = ({ children }) => {
  const socket = io("http://localhost:3000");

  const [roomSelected, setRoomSelected] = useState("room1");
  const [newMessages, setMessages] = useState([]);

  const changeRoom = (room) => {
    setRoomSelected(room);
  };

  const emmitMessage=(dataMessage)=>{
    socket.emit("newMessage", dataMessage)
  }

  useEffect(() => {
    socket.emit("room", roomSelected);
    // socket.on("messages", (messages) => {
    //   setMessages(messages);
    // });
    return () => {
      socket.off("room");
      // socket.off("messages");
    };
  }, [roomSelected]);

  useEffect(() => {
    socket.on("messages", (messages) => {
      setMessages(messages);
    });
    return () => {
      socket.off("messages");
    };
  }, [newMessages, roomSelected, emmitMessage]);

  const dataChatContext = {
    roomSelected,
    newMessages,
    changeRoom,
    emmitMessage
  };
  return <Provider value={dataChatContext}>{children}</Provider>;
};

export default ChatProvider;
