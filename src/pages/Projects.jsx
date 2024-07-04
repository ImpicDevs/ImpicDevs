import Project_1 from "../components/projects/Project_1";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      {/* main content start */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            Our Member&apos;s Projects
          </h2>
          <div className="text-center mb-8">
            <button className="button text-center mb-8">
              <span className="button_lg">
                <span className="button_sl"></span>
                <span className="button_text">
                  <Link to="/project-registration">Upload your Project</Link>
                </span>
              </span>
            </button>
          </div>

          {/* Project 1 */}
          <Project_1 />
        </div>
      </section>
      {/* main content ends */}
    </>
  );
};

export default Projects;
