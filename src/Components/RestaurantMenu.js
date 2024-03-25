import { useParams } from "react-router-dom";
import { CDN_URL, MENU_RES } from "../utils/constants";
import Shimmer from "./Shimmer"
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const resmenu = useRestaurantMenu(resid, MENU_RES);

  if (!resmenu) {
    return <Shimmer/>;
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
        <hr />
        {menuItems.map((menuItem) => (
          <li key={menuItem.card.info.id}>{menuItem.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
