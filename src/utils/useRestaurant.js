import { useState, useEffect } from "react";

const useRestaurant = (FETCH_RESTRO, setFilterres) => {
  const [resdata, setResData] = useState([]);
  const fetchdata = async () => {
    const response = await fetch(FETCH_RESTRO);

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
  return resdata;
};

export default useRestaurant;
