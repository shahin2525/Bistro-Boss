import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, category, price, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgURL,
          };
          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("after posting new menu item ", data.data);
            if (data.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "item added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
    reset();
  };
  // console.log(errors);
  // console.log(img_hosting_token);
  return (
    <div className=" w-11/12 px-10 ml-10 bg-slate-100">
      <SectionTitle
        subHeading={"What's new"}
        heading={"Add an item"}
      ></SectionTitle>
      <form className="pb-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full my-2">
          <label className="label">
            <span className="label-text">Recipe Name</span>
          </label>
          <input
            className="p-3 rounded w-full"
            type="text"
            placeholder="Recipe Name"
            {...register("name", { required: true, maxLength: 80 })}
          />
        </div>

        <div className="flex my-2">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              defaultValue="Category"
              className="p-2 rounded"
              {...register("category", { required: true })}
            >
              {" "}
              <option disabled>Category</option>
              <option value="Desert">Desert</option>
              <option value="Salad">Salad</option>
              <option value="Pizza">Pizza</option>
              <option value="Soups">Soups</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>

          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              className="p-2 rounded"
              type="text"
              placeholder="Price"
              {...register("price", { required: true })}
            />
          </div>
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Recipe Details</span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Item Image</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        {/* <button className="btn btn-primary">Primary</button> */}
        <input
          type="submit"
          value="Add Item"
          className="btn btn-primary mt-4"
        />
      </form>
    </div>
  );
};

export default AddItem;
