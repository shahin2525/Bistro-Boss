import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Feared from "../Feared/Feared";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testmonial from "../Testmonial/Testmonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Feared></Feared>
      <Testmonial></Testmonial>
    </div>
  );
};

export default Home;
