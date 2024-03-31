import { render, screen } from "@testing-library/react"
import Restrocard, { Recomenddedlabel } from "../Restrocard";
import Mock_data from "../mocks/resCardmock.json";
import Recommend_mockdata from "../mocks/recommendrescardmockdata.json"
import "@testing-library/jest-dom";


it("Should be render Restrocard  component with props data",()=>{
  render(<Restrocard resdata={Mock_data} />);

  const name = screen.getByText("McDonald's");  
  expect(name).toBeInTheDocument();
})


// it("Should be render Restrocard Recommend component with props data", () => {
//   render(<Recomenddedlabel resdata={Recommend_mockdata} />);

//   const name = screen.getByRole("header", { name: "Domino's Pizza" });
//   expect(name).toBeInTheDocument();
// });