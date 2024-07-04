import { useEffect } from "react";
import { addEventListeners } from "../utils/formHandler";

const Registration = () => {
  useEffect(() => {
    addEventListeners();
  }, []);

  return (
    <>
      {/* main content start */}
      <main className="pt-6 pb-20 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">
            Member Card Generator
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-black">
            <div className="bg-white shadow-md rounded p-6">
              <h2 className="text-2xl font-bold mb-6">Create Your Card</h2>
              <form id="memberForm" className="space-y-4">
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white text-black"
                    id="name"
                    type="text"
                    name="name"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="skills"
                  >
                    Skills
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white text-black"
                    id="skills"
                    type="text"
                    name="skills"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="reason"
                  >
                    Reason to be here
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white text-black"
                    id="reason"
                    name="reason"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="image"
                  >
                    Image URL
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white text-black"
                    id="image"
                    type="url"
                    name="image"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="github"
                  >
                    GitHub URL
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white text-black"
                    id="github"
                    type="url"
                    name="github"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="linkedin"
                  >
                    LinkedIn URL
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white text-black"
                    id="linkedin"
                    type="url"
                    name="linkedin"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="twitter"
                  >
                    Twitter URL
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white text-black"
                    id="twitter"
                    type="url"
                    name="twitter"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-black font-bold py-2 px-4 rounded hover:bg-gray-800 transition duration-300 hover-scale"
                >
                  Generate Card
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="bg-white shadow-md rounded p-6">
                <h2 className="text-2xl font-bold mb-4">Card Preview</h2>
                <div
                  id="output"
                  className="member-card p-6 border rounded-lg"
                ></div>
              </div>
              <div className="bg-white shadow-md rounded p-6">
                <h2 className="text-2xl font-bold mb-4">Generated Code</h2>
                <div className="relative">
                  <pre>
                    <code
                      id="htmlCode"
                      className="bg-gray-100 p-4 rounded-lg block overflow-x-auto text-sm"
                    ></code>
                  </pre>
                  <button
                    id="copyButton"
                    className="absolute top-2 right-2 bg-primary text-white font-bold py-2 px-4 rounded hover:bg-gray-800 transition duration-300 hover-scale"
                  >
                    Copy Code
                  </button>
                </div>
                <button
                  id="sendToModeratorButton"
                  className="w-full mt-4 bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 transition duration-300 hover-scale"
                >
                  Send to Moderator
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* script code */}
    </>
  );
};

export default Registration;
