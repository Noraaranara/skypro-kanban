import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PopUser from "./components/PopUser/PopUser";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <PopBrowse />
      <PopNewCard />
      <PopUser />
    </div>
  );
}

export default App;
