import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { useMeQuery } from "./store/service/userService";


function App() {
  // const {data}=useMeQuery()
  // console.log("🚀 ~ file: Isadmin.jsx:7 ~ Isadmin ~ me", data)
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
