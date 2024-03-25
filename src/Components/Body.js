import Restrocard from "./Restrocard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { FETCH_RESTRO } from "../utils/constants";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus"
const Body = () => {
  const [filterres, setFilterres] = useState([]);
  const [searchinput, setSearchInput] = useState("");

  const resdata = useRestaurant(FETCH_RESTRO, setFilterres);

  const handlefilter = () => {
    const filterted = resdata.filter((item) => item.info.avgRating > 4.4);
    setFilterres(filterted);
  };
  const handlesearch = () => {
    const searchdata = resdata.filter((item) =>
      item.info.name.toLowerCase().includes(searchinput.toLowerCase())
    );

    setFilterres(searchdata);
  };

  const onlinestatus = useOnlineStatus();

  if(onlinestatus === false)  return <h1>Look's like you are offline </h1>



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
