import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { clearCart, removeItem } from "../utils/cartSlice";
const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  console.log("cartitem = ", cartItem);

  const dispatch = useDispatch();
  const handleclearcart = () => {
    dispatch(clearCart());
  };

  const handleremoveitem = () => {
    dispatch(removeItem());
  };

  return (
    <>
      <h1 className="font-bold p-2 m-2 text-center text-2xl">Cart</h1>
      <button
        className="bg-black text-white rounded p-2 m-3 ml-5  "
        onClick={handleclearcart}
      >
        Clear cart
      </button>
      {cartItem.length ? (
        cartItem.map((item, index) => {
          const { name, imageId, price, description, defaultPrice } =
            item?.card?.info;
          return (
            <div
              key={index}
              className="bg-gray-300 text-center m-5 p-5  rounded-lg  flex justify-between"
            >
              <div className="w-9/12">
                <h1 className="text-left font-bold text-xl p-2">
                  {name} - ₹ {price / 100 ? price / 100 : defaultPrice / 100}
                </h1>
                <p className="text-left font-thin text-sm p-2">{description}</p>
              </div>
              <div className="w-3/12">
                <button
                  className="p-2 m-2 bg-black text-white rounded absolute "
                  onClick={handleremoveitem}
                >
                  Remove Item
                </button>
                <img
                  className="w-48 ml-32 rounded-lg"
                  src={CDN_URL + imageId}
                />
              </div>
            </div>
          );
        })
      ) : (
        <h1 className="m-10 p-10 font-bold text-center text-2xl text-red-600">
          Add items to cart
        </h1>
      )}
    </>
  );
};
export default Cart;
