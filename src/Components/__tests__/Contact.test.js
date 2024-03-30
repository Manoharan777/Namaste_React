import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

test("Should load contact us component",() => {
    render(<Contact/>); //render tot the jsdom
  const heading =  screen.getByRole("heading");

  expect(heading).toBeInTheDocument();

})

test("Should load button inside contact  component", () => {
  render(<Contact />); //render to  the jsdom
  const button = screen.getByText("Submit");

  expect(button).toBeInTheDocument();

  expect(screen.getByPlaceholderText("Enter a Name")).toBeInTheDocument();
});



test("should load 2 input boxes on the contact component", () => {
      render(<Contact />);
      //quering
  const inputboxes = screen.getAllByRole("textbox");
 // console.log(inputboxes);
  //assertion
   expect(inputboxes.length).toBe(2);
});
