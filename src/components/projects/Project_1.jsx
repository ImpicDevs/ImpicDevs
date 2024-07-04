const Project_1 = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="project-card rounded-xl overflow-hidden border">
          <img
            src="https://socialify.git.ci/zaid-commits/Wisdom-Whisper/image?background=Solid&description=1&font=Inter&forks=1&issues=1&language=1&owner=1&pattern=Solid&pullRequests=1&pulls=1&stargazers=1&stars=1&theme=Dark"
            alt="Wisdom Whisper"
            className="w-full h-64 object-cover"
          />
          <div className="p-8 border">
            <h3 className="font-bold text-2xl mb-4">Wisdom Whisper</h3>
            <p className="text-gray-600 text-lg mb-6">
              A platform sharing pearls of wisdom through daily quotes and
              inspirational messages, aimed at fostering positivity and
              motivation.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                Html
              </span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                Css
              </span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                Javascript
              </span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                Tailwind CSS
              </span>
            </div>
            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-primary font-bold text-lg hover:underline"
              >
                Learn More
              </a>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/zaid-commits/wisdom-whisper"
                  target="_blank"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a
                  href="https://wisdomwhisper.netlify.app"
                  target="_blank"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <i className="fas fa-external-link-alt text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project_1;
