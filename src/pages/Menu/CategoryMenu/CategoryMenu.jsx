import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const CategoryMenu = ({ items, img, title }) => {
  return (
    <div>
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 my-4">
          Order Your food
        </button>
      </Link>
    </div>
  );
};

export default CategoryMenu;
