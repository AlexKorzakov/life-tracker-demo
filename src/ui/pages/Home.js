import { userStore } from "../../store";
import Input from "../components/Input";

export default function HomePage() {
  const main = document.createElement("div");
  main.className = "home page";

  const pageHeader = document.createElement("h1");
  pageHeader.textContent = "Home Page!";

  const userInput = Input({
    className: "user-input",
    type: "text",
    name: "name",
    autocomplete: "off",
  });

  const userName = document.createElement("p");
  userName.className = "user-name";
  userName.textContent = `User name: ${userStore.name}`;

  const unsubscribe = userStore.subscribe((name) => {
    userName.textContent = `User name: ${name}`;
  });

  const userButton = document.createElement("button");
  userButton.type = "submit";
  userButton.textContent = "Add Name";

  const userForm = document.createElement("form");
  userForm.append(userName, userInput, userButton);

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    userStore.name = userInput.value;
  });

  const a = document.createElement("a");
  a.href = "/settings";
  a.textContent = "Settings page";

  main.append(pageHeader, userForm, a);

  return {
    element: main,
    destroy() {
      unsubscribe();
    },
  };
}
