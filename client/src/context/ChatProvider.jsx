import { createContext, useState,useEffect } from "react";
import { io } from "socket.io-client";

export const chatContext = createContext();
const { Provider } = chatContext;

const ChatProvider = ({ children }) => {
  const socket = io("http://localhost:3000");

  const [roomSelected, setRoomSelected] = useState("room1");
  const [newMessages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit("room", roomSelected);
  }, [roomSelected]);

  socket.on("messages", (messages) => {
    setMessages(messages);
  });

  
  const dataChatContext = {
    roomSelected,
    newMessages,
  };
  return <Provider value={dataChatContext}>{children}</Provider>;
};

export default ChatProvider;
