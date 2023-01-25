import { useContext } from "react";
import { chatContext } from "../context/ChatProvider";

const FormSendMessage = () => {
  const { roomSelected, emmitMessage } = useContext(chatContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const [user, message] = e.target.children;
    const newMessage = [
      {
        user: user.value,
        message: message.value,
      },
      roomSelected,
    ];
    emmitMessage(newMessage);
  };

  return (
    <form onSubmit={handleSubmit} className=" flex flex-0 w-full gap-1">
      <input className="w-1/5 text-black" type="text" placeholder="name" />
      <input className="w-3/5 text-black" type="text" placeholder="Message" />
      <button className="w-1/5 bg-green-300 text-black">Send</button>
    </form>
  );
};

export default FormSendMessage;
