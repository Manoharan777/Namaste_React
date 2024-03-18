// const heading = React.createElement("h1",{ id:"heading"},"hello world from react another file!!!!");
// console.log(heading); // object of creating elements
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1 tag below child"),
    React.createElement("h1", {}, "i am h2 tag below child"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i am h1 tag below child"),
    React.createElement("h1", {}, "i am h2 tag below child"),
  ]),
]);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);
