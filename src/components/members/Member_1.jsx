import image from "../../images/chirag_wadhwani.jpg";

const Member_1 = () => {
  return (
    <>
      <div className="head-card flex flex-col items-center">
        <img
          src={image}
          alt="Chirag Wadhwani"
          className="rounded-full object-cover mb-4"
        />
        <h3 className="font-bold text-xl mb-2">Chirag Wadhwani</h3>
        <p className="text-sm text-gray-600 mb-2">Skills: MERN.</p>
        <p className="text-sm text-center mb-4">
          Reason for joining this server is I am growing my network for my
          online presence and some new opportunities.
        </p>
        <div className="social-links">
          <a href="#" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Member_1;
