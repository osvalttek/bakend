import { useContext } from "react";
import { chatContext } from "../context/ChatProvider";

const AsideRooms = () => {
  const { changeRoom } = useContext(chatContext);

  return (
    <aside className="w-1/5 border-2 border-[#ff6347]">
      <button
        className="border-2 border-blue-700 w-32 h-12 rounded-lg hover:scale-110 hover:bg-blue-700"
        onClick={() => changeRoom("room1")}
      >
        room1
      </button>
      <button
        className="border-2 border-blue-700 w-32 h-12 rounded-lg hover:scale-110 hover:bg-blue-700"
        onClick={() => changeRoom("room2")}
      >
        room2
      </button>
      <button
        className="border-2 border-blue-700 w-32 h-12 rounded-lg hover:scale-110 hover:bg-blue-700"
        onClick={() => changeRoom("room3")}
      >
        room3
      </button>
    </aside>
  );
};

export default AsideRooms;
