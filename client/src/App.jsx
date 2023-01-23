import { io } from "socket.io-client";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  // const socket = io("http://localhost:3000");

  // socket.on("connect", () => {
  //   console.log(socket.id);
  // });

  return (
    <>
      <Header />
      <Main/>
    </>
  );
}

export default App;
