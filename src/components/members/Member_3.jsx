const Member_3 = () => {
  return (
    <>
      <div className="head-card flex flex-col items-center">
        <img
          src="https://i.postimg.cc/CM48XvRG/mayank.jpg"
          alt="Mayank Joshi"
          className="rounded-full object-cover mb-4"
        />
        <h3 className="font-bold text-xl mb-2">Mayank Joshi</h3>
        <p className="text-sm text-gray-600 mb-2">Skills: HTML,CSS,Js.</p>
        <p className="text-sm text-center mb-4">
          Reason to be here: To connect with people who share the same interests
          and to learn openly in a public setting.
        </p>
        <div className="social-links">
          <a href="https://github.com/MayankJoshi540" target="_blank">
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

export default Member_3;
