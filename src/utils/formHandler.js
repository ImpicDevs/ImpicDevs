// formHandler.js

export function handleFormSubmit(event) {
  event.preventDefault();
  updatePreview();
  document.getElementById("output").classList.add("fade-in");
}

export function updatePreview() {
  const name = document.getElementById("name").value || "Your Name";
  const skills = document.getElementById("skills").value || "Your Skills";
  const reason =
    document.getElementById("reason").value || "Your reason to be here";
  const image =
    document.getElementById("image").value || "https://via.placeholder.com/150";
  const github = document.getElementById("github").value;
  const linkedin = document.getElementById("linkedin").value;
  const twitter = document.getElementById("twitter").value;

  const htmlCode = `
      <div class="member-card flex flex-col items-center">
        <img
          src="${image}"
          alt="${name}"
          class="w-32 h-32 rounded-full object-cover mb-4"
        />
        <h3 class="font-bold text-xl mb-2">${name}</h3>
        <p class="text-sm text-gray-600 mb-2">Skills: ${skills}</p>
        <p class="text-sm text-center mb-4">Reason to be here: ${reason}</p>
        <div class="social-links">
          ${
            github
              ? `<a href="${github}" target="_blank"><i class="fab fa-github"></i></a>`
              : ""
          }
          ${
            linkedin
              ? `<a href="${linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>`
              : ""
          }
          ${
            twitter
              ? `<a href="${twitter}" target="_blank"><i class="fab fa-twitter"></i></a>`
              : ""
          }
        </div>
      </div>
    `;

  const outputElement = document.getElementById("output");
  outputElement.innerHTML = htmlCode;
  document.getElementById("htmlCode").textContent = htmlCode;
}

export function handleCopyButtonClick() {
  const codeElement = document.getElementById("htmlCode");
  navigator.clipboard.writeText(codeElement.textContent).then(() => {
    this.textContent = "Copied!";
    setTimeout(() => {
      this.textContent = "Copy Code";
    }, 2000);
  });
}

export function handleSendToModeratorClick() {
  const code = document.getElementById("htmlCode").textContent;
  const emailBody = encodeURIComponent(
    `Hello Moderator,\n\nHere's my generated member card code:\n\n${code}\n\nPlease add this to the website.\n\nThank you!`
  );
  const mailtoLink = `mailto:engineering.zaidrakhange@gmail.com?subject=New Member Card Submission&body=${emailBody}`;
  window.location.href = mailtoLink;
}

export function addEventListeners() {
  document
    .getElementById("memberForm")
    .addEventListener("submit", handleFormSubmit);

  const inputFields = document.querySelectorAll(
    "#memberForm input, #memberForm textarea"
  );
  inputFields.forEach((field) => {
    field.addEventListener("input", updatePreview);
  });

  document
    .getElementById("copyButton")
    .addEventListener("click", handleCopyButtonClick);
  document
    .getElementById("sendToModeratorButton")
    .addEventListener("click", handleSendToModeratorClick);

  // Initial preview update
  updatePreview();
}
