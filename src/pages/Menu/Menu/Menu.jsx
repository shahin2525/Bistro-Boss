import { Helmet } from "react-helmet-async";

import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import UseMenu from "../../../Hooks/UseMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = UseMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "offered");
  // const drinks = menu.filter((item) => item.category === "drinks");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>
      <CategoryMenu items={offered}></CategoryMenu>
      <CategoryMenu
        items={dessert}
        title="dessert"
        img={dessertImg}
      ></CategoryMenu>
      <CategoryMenu items={pizza} title="pizza" img={pizzaImg}></CategoryMenu>
      <CategoryMenu items={salad} title="salads" img={saladImg}></CategoryMenu>

      <CategoryMenu items={soup} title="soup" img={soupImg}></CategoryMenu>
    </div>
  );
};

export default Menu;
