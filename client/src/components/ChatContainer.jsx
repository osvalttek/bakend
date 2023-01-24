import { useContext } from "react";
import { chatContext } from "../context/ChatProvider";
import Chat from "./Chat";

const ChatContainer = () => {
  const { newMessages } = useContext(chatContext);

  return (
    <div className="w-4/5 border-2 border-[#ff6347]">
      <dl>
        {newMessages.map((message, key) => {
          return <Chat message={message} key={key} />;
        })}
      </dl>
    </div>
  );
};

export default ChatContainer;
