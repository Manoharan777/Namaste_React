import { useParams } from "react-router-dom";
import { CDN_URL, MENU_RES } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const resmenu = useRestaurantMenu(resid, MENU_RES);
  console.log("restaurentmenu", resmenu);

  if (
    !resmenu ||
    !resmenu.data ||
    !resmenu.data.cards ||
    resmenu.data.cards.length === 0
  ) {
    return <Shimmer />;
  }

  const {
    name,
    avgRating,
    costForTwoMessage,
    locality,
    areaName,
    cuisines,
    cloudinaryImageId,
  } = resmenu.data.cards[2]?.card?.card?.info || {};

  // Extract menu items if they exist
  const menuItems =
    resmenu.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards || [];

  return (
    <div className="menu m-5 p-5 w-auto text-center bg-slate-400 rounded-lg">
      <h1 className="font-bold text-xl py-2">{name}</h1>
      <img
        className="restro-logo  mx-auto w-52 my-2 rounded-lg "
        src={CDN_URL + cloudinaryImageId}
      />
      <h4>
        {avgRating} ⭐ - {costForTwoMessage}
      </h4>
      <p>{cuisines?.join(", ")}</p>
      <h5>
        {locality}, {areaName}
      </h5>
      <ul>
        <li className="font-bold py-2">List of Menu's</li>
        <hr />
        {menuItems.map((menuItem) => (
          <li className="text-white" key={menuItem.card.info.id}>
            {menuItem.card.info.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
