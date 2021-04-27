import logo from "./logo.svg";
import "./App.css";
import ColorBox from "./components/ColorBox";
import ColorContext from "./context/color";
import ColorProvider from "./context/ColorContext";
import SelectColors from "./components/SelectColors";

function App() {
  return (
    <ColorProvider>
      {/* <ColorContext.Provider value={{ color: "red" }}> */}
      <div className="App">
        <SelectColors></SelectColors>
        <ColorBox></ColorBox>
      </div>
      {/* </ColorContext.Provider> */}
    </ColorProvider>
  );
}

export default App;
