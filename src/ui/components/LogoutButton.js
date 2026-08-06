export default function LogoutButton(onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "button-logout";
  button.textContent = "Logout";

  button.addEventListener("click", onClick);
  return button;
}
