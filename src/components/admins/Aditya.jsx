const Aditya = () => {
  return (
    <>
      <div className="head-card admin-card flex flex-col items-center">
        <span className="admin-label">Moderator</span>
        <img
          src="https://avatars.githubusercontent.com/u/101452242"
          alt="Arya"
          className="rounded-full object-cover mb-4"
        />
        <h3 className="font-bold text-xl mb-2">Aditya Raj</h3>
        <p className="text-sm text-gray-600 mb-2">
          Skills: HTML/CSS/JS, ReactJs, MongoDB, Python
        </p>
        <p className="text-sm text-center mb-4">
          The reason for me to hop on to this community is to just chill with
          like minded individuals.
        </p>
        <div className="social-links">
          <a href="https://github.com/aditya8raj" target="_blank">
            <i className="fab fa-github"></i>
          </a>

          <a href="https://x.com/nerdinbiz" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Aditya;
