import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";


describe("Testing contact us component", () => {
  it("Should load contact us component", () => {
    render(<Contact />); //render tot the jsdom
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact  component", () => {
    render(<Contact />); //render to  the jsdom
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Enter a Name")).toBeInTheDocument();
  });

  it("Should load placeholder text inside contact  component", () => {
    render(<Contact />); //render to  the jsdom

    expect(screen.getByPlaceholderText("Enter a Name")).toBeInTheDocument();
  });

  it("should load 2 input boxes on the contact component", () => {
    render(<Contact />);
    //quering
    const inputboxes = screen.getAllByRole("textbox");
    // console.log(inputboxes);
    //assertion
    expect(inputboxes.length).toBe(2);
  });
});
