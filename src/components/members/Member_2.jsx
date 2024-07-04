const Member_2 = () => {
  return (
    <>
      <div className="head-card flex flex-col items-center">
        <img
          src="https://avatars.githubusercontent.com/u/128823414?v=4"
          alt="Utkarsh Tiwari"
          className="rounded-full object-cover mb-4"
        />
        <h3 className="font-bold text-xl mb-2">Utkarsh Tiwari</h3>
        <p className="text-sm text-gray-600 mb-2">
          Skills: MERN,TypeScript,NextJs,Python.
        </p>
        <p className="text-sm text-center mb-4">
          A Full Stack Developer from India specializing in the MERN stack,
          dedicated to building user-friendly web apps and passionate about
          impactful AI projects.
        </p>
        <div className="social-links">
          <a href="https://github.com/Developer-Utkarsh" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/DeveloperUtkarsh"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://x.com/DevloperUtkarsh" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Member_2;
