const Member_6 = () => {
  return (
    <>
      <div className="head-card flex flex-col items-center">
        <img
          src="https://avatars.githubusercontent.com/u/171406129?v=4"
          alt="Yash"
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <h3 className="font-bold text-xl mb-2">Yash</h3>
        <p className="text-sm text-gray-600 mb-2">Skills: Full Stack WebDev</p>
        <p className="text-sm text-center mb-4">
          Reason to be here: Got the invite from one of friend and also I like
          exploring communities
        </p>
        <div className="social-links">
          <a href="https://github.com/yashmadke" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/yash-madke-b31251252/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/yash-madke-b31251252/"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Member_6;
