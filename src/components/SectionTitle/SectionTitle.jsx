const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="text-center w-4/12 mx-auto ">
      <p className="text-yellow-600 text-xl mb-2">--- {subHeading} ---</p>
      <h1 className="text-4xl uppercase border-y-4 py-2 mb-6">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
