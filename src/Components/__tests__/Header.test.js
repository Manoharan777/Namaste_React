import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header component Test cases", () => {


  // beforeAll(()=>{
  //   console.log("before all");
  // })
  
  // afterAll(() => {
  //   console.log("after all");
  // });

  // afterEach(() => {
  //   console.log("after Each");
  // });


  //   beforeEach(() => {
  //     console.log("before Each");
  //   });
  it("should render Header component with a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginbutton = screen.getByRole("button", { name: "Login" });
    // const loginbutton = screen.getByText("Login")
    expect(loginbutton).toBeInTheDocument();
  });

  it("should render Header component with a cart item 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItem = screen.getByText("🛒 - (0 items)");
    expect(cartItem).toBeInTheDocument();
  });

  it("should render Header component with a cart item ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItem = screen.getByText(/items/); //using Regex irrespective of item in the list.
    expect(cartItem).toBeInTheDocument();
  });

  it("should change login to logout on click ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginbutton = screen.getByRole("button", { name: "Login" });
    //firing the event
    fireEvent.click(loginbutton);
    const logoutbutton = screen.getByRole("button", { name: "Logout" });
    expect(logoutbutton).toBeInTheDocument();
  });
});