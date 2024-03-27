import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import RestaurantMenu from "./Components/RestaurantMenu";
import Error from "./Components/Error";
import useContextApi from "./utils/useContextApi";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//code splliting using lazy loading... then wrap it with suspence component

const Grocery = lazy(() => import("./Components/Grocery"));

export const AppLayout = () => {
  const [userName, setUserName] = useState();

useEffect(()=>{
  const data = {
    name: "Mano"
  }
  setUserName(data.name);
},[])

  return (
    <useContextApi.Provider value={{ userLogged : userName}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </useContextApi.Provider>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h2>Loading....</h2>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resid",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
