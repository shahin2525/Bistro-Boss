const FoodCard = ({ item }) => {
  const { name, recipe, price, image } = item;
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
          <button className="btn btn-outline bg-slate-100  border-0 border-b-4 mt-4  border-orange-400">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
