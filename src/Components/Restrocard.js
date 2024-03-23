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
    <div className="card">
      <img className="restro-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <span>{avgRating} ⭐</span> . <span>{costForTwo}</span>
      <p>{locality}</p>
      <p>{sla.slaString}</p>
    </div>
  );
};
  
export default Restrocard;
