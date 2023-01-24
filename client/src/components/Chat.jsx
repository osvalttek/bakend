import React from "react";

const Chat = ({ message }) => {
  return (
    <>
      <dt>{message.user}</dt>
      <dd className="p-4">{message.message}</dd>
    </>
  );
};

export default Chat;
