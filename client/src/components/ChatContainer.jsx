import { useContext } from "react";
import { chatContext } from "../context/ChatProvider";
import Chat from "./Chat";
import FormSendMessage from "./FormSendMessage";

const ChatContainer = () => {
  const { newMessages } = useContext(chatContext);

  return (
    <div className="w-4/5 border-2 border-[#ff6347] flex flex-col">
      <FormSendMessage />

      <dl className="flex-1">
        {newMessages.map((message, key) => {
          return <Chat message={message} key={key} />;
        })}
      </dl>
    </div>
  );
};

export default ChatContainer;
