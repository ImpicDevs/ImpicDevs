const Member_8 = () => {
  return (
    <>
      <div className="head-card flex flex-col items-center">
        <img
          src="https://avatars.githubusercontent.com/u/133865660?v=4"
          alt="Hemang"
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <h3 className="font-bold text-xl mb-2">Hemang Yadav</h3>
        <p className="text-sm text-gray-600 mb-2">
          Skills: Javascript, Typescript, ReactJS, NodeJS, TailwindCSS
        </p>
        <p className="text-sm text-center mb-4">
          I&apos;m here just to explore this amazing community
        </p>
        <div className="social-links">
          <a href="https://github.com/Zemerik" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/zemerik" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://x.com/Zemerik_X" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Member_8;
