import Restrocard from "./Restrocard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resdata, setResData] = useState([]);
  const [filterres, setFilterres] = useState([]);
  const [searchinput, setSearchInput] = useState("");
  const handlefilter = () => {
    const filterted = resdata.filter((item) => item.info.avgRating > 4.4);
    setFilterres(filterted);
  };

  const fetchdata = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.93925&lng=77.7000932&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const result = await response.json();
    //optional chaining
    const { restaurants } =
      result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle;
    setResData(restaurants);
    setFilterres(restaurants);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handlesearch = () => {
    const searchdata = resdata.filter((item) =>
      item.info.name.toLowerCase().includes(searchinput.toLowerCase())
    );

    setFilterres(searchdata);
  };

  return resdata.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search foods,Restaurants"
            value={searchinput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button className="filter-btn" onClick={handlesearch}>
            search
          </button>
        </div>
        <button onClick={handlefilter} className="filter-btn">
          Top Rated Restaurant
        </button>
      </div>
      <div className="restro-conatiner">
        {filterres.map((res) => (
          <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
            <Restrocard resdata={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
