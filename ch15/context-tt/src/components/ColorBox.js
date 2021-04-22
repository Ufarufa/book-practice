import React from "react";
import { ColorConsumer } from "../context/ColorContext";

/* function ColorBoxOnlyState() {
  return (
    <ColorContext.Consumer>
      {(value) => (
        <div
          style={{ width: "64px", height: "64px", background: value.color }}
        ></div>
      )}
    </ColorContext.Consumer>
  );
} */

function ColorBox(params) {
  return (
    <ColorConsumer>
      {(value) => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: value.state.color,
            }}
          ></div>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: value.state.subcolor,
            }}
          ></div>
        </>
      )}
    </ColorConsumer>
  );
}

export default ColorBox;
