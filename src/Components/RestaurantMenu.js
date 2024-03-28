import { useParams } from "react-router-dom";
import { CDN_URL, MENU_RES } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const resmenu = useRestaurantMenu(resid, MENU_RES);
  const dispatch = useDispatch();

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
  const Recommended =
    resmenu.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards || [];

  // const combopack =
  //   resmenu.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card?.categories[0]?.itemCards || [];

  // console.log(
  //   "cards = ",
  //   resmenu.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

  const category =
    resmenu.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];
  //console.log("category= ", category);

  const handleadditems = (itemname) => {
    dispatch(addItem(itemname));
  };

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

      <hr className="my-1" />
      <ul>
        <li className="font-bold py-2">Recommended - ({Recommended.length})</li>
        <hr />
        {Recommended.map((menuItem) => (
          <li
            className="bg-cyan-200 my-2 py-2 rounded shadow-lg text-left px-2 font-semibold"
            key={menuItem.card.info.id}
          >
            {menuItem.card.info.name} - ₹{" "}
            {menuItem.card.info.price / 100
              ? menuItem.card.info.price / 100
              : menuItem.card.info.defaultPrice / 100}
            <button
              className="text-end bg-black text-white m-1 p-1 rounded"
              onClick={() => handleadditems(menuItem)}
            >
              Add
            </button>
          </li>
        ))}
      </ul>
      <hr />

      <ul>
        <li className="font-bold py-2">items cards</li>
        <hr />
        {category.map((cat, index) => (
          <li
            className="bg-cyan-200 my-2 py-2 rounded shadow-lg text-left px-2 font-semibold"
            key={index}
          >
            {cat.card.card.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
