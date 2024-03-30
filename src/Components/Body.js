import Restrocard, { recomenddedlabel } from "./Restrocard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { FETCH_RESTRO, NETWORK_ERROR } from "../utils/constants";
import offlinepage from "../../asset/offlinepage.png";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [filterres, setFilterres] = useState([]);
  const [searchinput, setSearchInput] = useState("");

  const resdata = useRestaurant(FETCH_RESTRO, setFilterres);

  const Recommendcard = recomenddedlabel(Restrocard);

 // console.log("Data= ",resdata);

  const handlefilter = () => {
    const filterted = resdata.filter((item) => item.info.avgRating > 4.3);
    setFilterres(filterted);
  };
  const handlesearch = () => {
    const searchdata = resdata.filter((item) =>
      item.info.name.toLowerCase().includes(searchinput.toLowerCase())
    );

    setFilterres(searchdata);
  };

  const onlinestatus = useOnlineStatus();

  if (onlinestatus === false) return <img src={offlinepage} alt="Look's like you are offline,check your internet connection" />;;

  return resdata.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter flex">
        <div className="search">
          <input
            type="text"
            className=" m-4 p-4 border border-solid border-black"
            placeholder="Search foods,Restaurants"
            value={searchinput} 
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button
            className="filter-btn bg-green-400 py-2 px-2 m-4 border rounded text-white"
            onClick={handlesearch}
          >
            search
          </button>
        </div>
        <button
          onClick={handlefilter}
          className="filter-btn  bg-orange-400 py-2 px-2 m-4 border rounded text-white"
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restro-conatiner flex flex-wrap justify-center ">
        {filterres.map((res) => (
          <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
            {res.info.avgRating > 4.3 ? (
              <Recommendcard resdata={res} />
            ) : (
              <Restrocard resdata={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
