import React from "react";
import ReactDOM from "react-dom/client";


const Tile = () => <p>Tile comp</p>
 
//compnent composition
export  const App = () => {
  var ans = 9000;
  return (
    <>
      <h1>Hi this is manoharan </h1>
      <Tile/>
      {Tile()} and {ans}
      <p>from react namastte</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
