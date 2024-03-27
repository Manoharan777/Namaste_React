import { CDN_URL } from "../utils/constants";

const Restrocard = ({ resdata }) => {
  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    costForTwo,
    locality,
    sla,
  } = resdata?.info;

  return (
    <div className="card m-4 p-4 w-[300px] h-[525px]  bg-gray-300 rounded-lg hover:shadow-2xl hover:bg-orange-400 hover:text-white">
      <img
        className="restro-logo rounded-lg "
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <span>{avgRating} ⭐</span> . <span>{costForTwo}</span>
      <p>{locality}</p>
      <p className=" py-1">{sla.slaString}</p>
    </div>
  );
};

//Higher-order component

export const recomenddedlabel = (Restrocard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute p-2 m-2 bg-black text-white rounded-md">
          Recommended
        </label>
        <Restrocard {...props} />
      </div>
    );
  };
};

export default Restrocard;
