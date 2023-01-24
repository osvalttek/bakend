import Header from "./components/Header";
import Main from "./components/Main";
import ChatProvider from "./context/ChatProvider";


function App() {
  return (
    <ChatProvider>
      <Header />
      <Main/>
    </ChatProvider>
  );
}

export default App;
