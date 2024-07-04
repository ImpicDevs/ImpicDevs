import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-50">
        <div className="navbar text-white bg-black">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-black"
              >
                <li>
                  <a href="/#about">About</a>
                </li>
                <li>
                  <a href="/#admins">Admins</a>
                </li>
                <li>
                  <Link to="/members">Members</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
              </ul>
            </div>
            <Link className="text-xl pl-4 font-bold" to="/">
              Impic
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#admins">Admins</a>
              </li>
              <li>
                <Link to="/members">Members</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a
              className="btn bg-black text-white hover:bg-white hover:text-black transition duration-500 ease-in-out mr-3"
              href="https://discord.gg/S4QV6BbcNA"
            >
              Join Discord
            </a>
          </div>
          <button id="theme-toggle" className="btn btn-ghost text-lg">
            🌙
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
