export function initializeThemeToggle() {
  const themeToggleButton = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "light";
  document.body.classList.add(currentTheme + "-theme");

  themeToggleButton.textContent = currentTheme === "light" ? "🌙" : "☀️";

  themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");

    const newTheme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
    themeToggleButton.textContent = newTheme === "light" ? "🌙" : "☀️";
    localStorage.setItem("theme", newTheme);
  });
}
