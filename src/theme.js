export function toggleTheme() {
  const root = document.documentElement;
  const atual = root.getAttribute("data-theme");
  root.setAttribute("data-theme", atual === "dark" ? "light" : "dark");
}
