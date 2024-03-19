import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1 tag below child"),
    React.createElement("p", {}, "i am h2 tag below child"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i am h1 tag below child"),
    React.createElement("p", {}, "i am h2 tag below child"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
