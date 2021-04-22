import logo from "./logo.svg";
import "./App.css";
import ColorBox from "./components/ColorBox";
import ColorContext from "./context/color";
import ColorProvider from "./context/ColorContext";

function App() {
  return (
    <ColorProvider>
      {/* <ColorContext.Provider value={{ color: "red" }}> */}
      <div className="App">
        <ColorBox></ColorBox>
      </div>
      {/* </ColorContext.Provider> */}
    </ColorProvider>
  );
}

export default App;
