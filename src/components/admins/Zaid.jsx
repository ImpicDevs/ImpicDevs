const Zaid = () => {
  return (
    <>
      <div className="head-card admin-card flex flex-col items-center">
        <span className="admin-label">Co-Founder</span>
        <img
          src="https://cdn.prod.website-files.com/62bdc93e9cccfb43e155104c/654f7e7c694b77bb4600eed3_Luffy%2520PFP%2520for%2520Tiktok%25205.png"
          alt="Zaid Rakhange"
          className="rounded-full object-cover mb-4"
        />
        <h3 className="font-bold text-xl mb-2">Zaid Rakhange</h3>
        <p className="text-sm text-gray-600 mb-2">
          Skills: React, Tailwind, Java, Swing
        </p>
        <p className="text-sm text-center mb-4">
          Passionate <strong>Co-Founder</strong> of this amazing community who
          loves to build communities and foster collaborations with like minded
          individuals.
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

export default Zaid;
