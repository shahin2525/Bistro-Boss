import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import feardImg from "../../../assets/home/featured.jpg";
import "./Feared.css";
const Feared = () => {
  return (
    <div className="featured pt-10 my-8 bg-fixed">
      <SectionTitle
        subHeading="---Check it out---"
        heading="Featured Item"
      ></SectionTitle>
      <div className=" md:flex justify-center items-center py-20 px-36 text-white bg-black bg-opacity-30">
        <div>
          <img className="rounded-lg" src={feardImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>March 20 2020</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At eveniet
            hic sint nobis illo quasi inventore. Ex eaque tempore, harum soluta
            ullam aspernatur sunt iure maxime. Eius expedita dicta earum.
          </p>
          <button className="btn btn-outline border-0 border-b-4">
            Default
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feared;
