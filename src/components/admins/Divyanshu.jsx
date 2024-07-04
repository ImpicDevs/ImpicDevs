const Divyanshu = () => {
  return (
    <>
      <div className="head-card admin-card flex flex-col items-center">
        <span className="admin-label">Founder</span>
        <img
          src="https://i.postimg.cc/K8xHFpfm/divyanshu.jpg"
          alt="Divyanshu Mhatre"
          className="rounded-full object-cover mb-4"
        />
        <h3 className="font-bold text-xl mb-2">Divyanshu Mhatre</h3>
        <p className="text-sm text-gray-600 mb-2">Skills: WebDev,Business</p>
        <p className="text-sm text-center mb-4">
          I am the <strong>Founder</strong> of this community who likes meeting
          new people and build professional communities.
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

export default Divyanshu;
