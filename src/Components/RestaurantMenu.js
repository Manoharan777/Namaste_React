import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL, MENU_RES } from "../utils/constants";
const RestaurantMenu = () => {
  const [resmenu, setResMenu] = useState(null);
  const { resid } = useParams();
  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_RES+resid);
      const result = await response.json();
      setResMenu(result);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);


 // console.log(resid);
  if (!resmenu) {
    return <div>Loading...</div>;
  }

  const { data } = resmenu;

  const {
    name,
    avgRating,
    costForTwoMessage,
    locality,
    areaName,
    cuisines,
    cloudinaryImageId,
  } = data.cards[0]?.card?.card?.info;


  // Extract menu items if they exist
  const menuItems =
    data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <img className="restro-logo" src={CDN_URL + cloudinaryImageId} />
      <h4>
        {avgRating} ⭐ - {costForTwoMessage}
      </h4>
      <p>{cuisines?.join(", ")}</p>
      <h5>
        {locality}, {areaName}
      </h5>
      <ul>
        List of Menu's
        <hr/>
        {menuItems.map((menuItem) => (
          <li key={menuItem.card.info.id}>{menuItem.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;