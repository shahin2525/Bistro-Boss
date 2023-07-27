import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import UseCart from "../../Hooks/UseCart";

const FoodCard = ({ item }) => {
  const { _id, name, image, price, recipe } = item;
  const { user } = useContext(AuthContext);
  // console.log(user);
  const navigate = useNavigate();
  const [, refetch] = UseCart();
  const location = useLocation();
  const handleAddToCart = (item) => {
    console.log(item);
    if (user) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        recipe,
        email: user.email,
      };
      fetch("https://bistro-boss-server-five-ochre.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Your food has been added on cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login",
        text: "You won't be able to add cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login it!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  // const { name, recipe, price, image } = item;
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className=" absolute right-6  bg-slate-900 text-white mr-4 mt-4  ">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className=" text-3xl extrabold ">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline bg-slate-100  border-0 border-b-4 mt-4  border-orange-400"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
