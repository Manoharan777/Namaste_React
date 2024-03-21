import Restrocard from "./Restrocard";
import restaurant from "../utils/MockData";
import { useState } from "react";

const Body = () => {
const [data, setData] = useState(restaurant);
  const handlefilter = () => {
    const filterted = data.filter((item) => item.info.avgRating > 4.2);
   setData(filterted);
  };

  return (
    <div className="body-container">
      {/* <div className="search">search</div> */}
      <div className="filter">
        <button onClick={handlefilter} className="filter-btn">
          Top Rated Restaurant
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setData(restaurant);
          }}
        >
          back to state
        </button>
      </div>
      <div className="restro-conatiner">
        {data.map((res) => (
          <Restrocard key={res.info.id} resdata={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
