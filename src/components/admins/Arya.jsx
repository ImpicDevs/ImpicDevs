const Arya = () => {
  return (
    <>
      <div className="head-card admin-card flex flex-col items-center">
        <span className="admin-label">Moderator</span>
        <img
          src="https://i.postimg.cc/yNrQm1HN/arya.png"
          alt="Arya"
          className="rounded-full object-cover mb-4"
        />
        <h3 className="font-bold text-xl mb-2">Arya S</h3>
        <p className="text-sm text-gray-600 mb-2">Skills: Discord Manager</p>
        <p className="text-sm text-center mb-4">
          I&apos;m here to build a vibrant community, connect with new people,
          and facilitate meaningful conversations to help everyone grow
          together.
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

export default Arya;
