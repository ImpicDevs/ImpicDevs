const Member_4 = () => {
  return (
    <>
      <div className="head-card flex flex-col items-center">
        <img
          src="https://avatars.githubusercontent.com/u/74349407?v=4?s=400"
          alt="Lakshay Bhushan"
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <h3 className="font-bold text-xl mb-2">Lakshay Bhushan</h3>
        <p className="text-sm text-gray-600 mb-2">
          Skills: React, TS, Nextjs, Hono.
        </p>
        <p className="text-sm text-center mb-4">
          My Reason to be here is to seek guidance & show the community what
          I&apos;m working on !
        </p>
        <div className="social-links">
          <a href="https://github.com/lakshaybhushan" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/lakshaybhushan" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://x.com/blakssh" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Member_4;
