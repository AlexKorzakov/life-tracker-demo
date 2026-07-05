export default function HomePage() {
  const main = document.createElement("div");
  main.className = "home page";

  const p = document.createElement("p");
  p.textContent = "Home Page!";

  const link = document.createElement("a");
  link.href = "/settings";
  const span = document.createElement("span");
  span.textContent = "link";
  link.appendChild(span);

  main.append(p, link);

  return main;
}
