const Member_5 = () => {
  return (
    <>
      <div className="head-card flex flex-col items-center">
        <img
          src="https://i.postimg.cc/j50N0m6X/image.png"
          alt="Dev"
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <h3 className="font-bold text-xl mb-2">Dev</h3>
        <p className="text-sm text-gray-600 mb-2">
          Skills: ReactJs, Bootstrap, Tailwind, GSAP
        </p>
        <p className="text-sm text-center mb-4">
          I&apos;m here Just to chill out and explore this amazing community.
        </p>
        <div className="social-links">
          <a href="https://github.com/Purohitdev" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/devansh-rajpurohit/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/DevanshRaj65478" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Member_5;
