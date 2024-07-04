import AdminCards from "../components/AdminCards";

import Member_1 from "../components/members/Member_1";
import Member_2 from "../components/members/Member_2";
import Member_3 from "../components/members/Member_3";
import Member_4 from "../components/members/Member_4";
import Member_5 from "../components/members/Member_5";
import Member_6 from "../components/members/Member_6";
import Member_7 from "../components/members/Member_7";
import Member_8 from "../components/members/Member_8";

import SearchBar from "../components/SearchBar";

import { Link } from "react-router-dom";

const Members = () => {
  return (
    <>
      {/* main content start */}
      <main className="pt-6 pb-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-8">
            Our Discord Community Members
          </h1>
          {/* search bar */}
          <SearchBar />

          {/* admin section */}
          <section id="admins">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-8">
                Our Community Heads
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* admin cards */}
                <AdminCards />
              </div>
            </div>
          </section>

          {/* Members Section */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-8 mt-14">
              Our Members
            </h2>
            <div className="text-center mb-8">
              <button className="button text-center mb-8">
                <span className="button_lg">
                  <span className="button_sl"></span>
                  <span className="button_text">
                    <Link to="/registration">Create Your Card</Link>
                  </span>
                </span>
              </button>
            </div>

            {/* Members Grid */}
            <div
              id="memberGrid"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-black"
            >
              {/* <member 1 */}
              <Member_1 />

              {/* member 2 */}
              <Member_2 />

              {/* member 3  */}
              <Member_3 />

              {/* member 4 */}
              <Member_4 />

              {/* member 5  */}
              <Member_5 />

              {/* member 6  */}
              <Member_6 />

              {/* member 7 */}
              <Member_7 />

              {/* member 8  */}
              <Member_8 />
            </div>
          </section>

          {/* pagination */}
          <div className="mt-16 flex justify-center">
            <nav className="inline-flex rounded-md shadow bg-white text-black">
              <a
                href="#"
                className="px-4 py-2 rounded-l-md border border-primary text-sm font-medium text-primary hover:bg-gray-200"
              >
                Previous
              </a>
              <a
                href="#"
                className="px-4 py-2 border-t border-b border-primary text-sm font-medium text-primary hover:bg-gray-200"
              >
                1
              </a>
              <a
                href="#"
                className="px-4 py-2 border border-primary text-sm font-medium text-primary hover:bg-gray-200"
              >
                2
              </a>
              <a
                href="#"
                className="px-4 py-2 rounded-r-md border border-primary text-sm font-medium text-primary hover:bg-gray-200"
              >
                Next
              </a>
            </nav>
          </div>
        </div>
      </main>
      {/* main content ends */}
    </>
  );
};

export default Members;
