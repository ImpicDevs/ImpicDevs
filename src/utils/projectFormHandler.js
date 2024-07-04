export function updatePreview() {
  const name = document.getElementById("name").value || "Project Name";
  const description =
    document.getElementById("description").value ||
    "Project description goes here.";
  const technologies =
    document.getElementById("technologies").value || "Technologies used";
  const image =
    document.getElementById("image").value ||
    "https://via.placeholder.com/600x300";
  const github = document.getElementById("github").value;
  const liveDemo = document.getElementById("liveDemo").value;

  const htmlCode = `
      <div class="project-card rounded-xl overflow-hidden">
          <img src="${image}" alt="${name}" class="w-full h-64 object-cover">
          <div class="p-8">
              <h3 class="font-bold text-2xl mb-4">${name}</h3>
              <p class="text-gray-600 text-lg mb-6">${description}</p>
              <div class="flex flex-wrap gap-2 mb-6">
                  ${technologies
                    .split(",")
                    .map(
                      (tech) =>
                        `<span class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">${tech.trim()}</span>`
                    )
                    .join("")}
              </div>
              <div class="flex justify-between items-center">
                  <a href="#" class="text-primary font-bold text-lg hover:underline">Learn More</a>
                  <div class="flex space-x-4">
                      ${
                        github
                          ? `<a href="${github}" target="_blank" class="text-gray-400 hover:text-primary transition-colors"><i class="fab fa-github text-2xl"></i></a>`
                          : ""
                      }
                      ${
                        liveDemo
                          ? `<a href="${liveDemo}" target="_blank" class="text-gray-400 hover:text-primary transition-colors"><i class="fas fa-external-link-alt text-2xl"></i></a>`
                          : ""
                      }
                  </div>
              </div>
          </div>
      </div>
      `;

  const outputElement = document.getElementById("output");
  outputElement.innerHTML = htmlCode;
  document.getElementById("htmlCode").textContent = htmlCode;
}

export function setupProjectFormHandler() {
  // Add event listeners to all input fields
  const inputFields = document.querySelectorAll(
    "#projectForm input, #projectForm textarea"
  );
  inputFields.forEach((field) => {
    field.addEventListener("input", updatePreview);
  });

  // Initial preview update
  updatePreview();

  // Form submission handling
  document
    .getElementById("projectForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      updatePreview();
      document.getElementById("output").classList.add("fade-in");
    });

  // Copy button functionality
  document.getElementById("copyButton").addEventListener("click", function () {
    const codeElement = document.getElementById("htmlCode");
    navigator.clipboard.writeText(codeElement.textContent).then(() => {
      this.textContent = "Copied!";
      setTimeout(() => {
        this.textContent = "Copy Code";
      }, 2000);
    });
  });

  // Send to moderator functionality
  document
    .getElementById("sendToModeratorButton")
    .addEventListener("click", function () {
      const code = document.getElementById("htmlCode").textContent;
      const emailBody = encodeURIComponent(
        `Hello Moderator,\n\nHere's my generated project card code:\n\n${code}\n\nPlease add this project to the website.\n\nThank you!`
      );
      const mailtoLink = `mailto:engineering.zaidrakhange@gmail.com?subject=New Project Submission&body=${emailBody}`;
      window.location.href = mailtoLink;
    });
}
