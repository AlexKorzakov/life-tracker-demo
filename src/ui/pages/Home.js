import Input from "../components/Input";
import User from "../../domain/User";

export default function HomePage({ userStore }) {
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
  userName.textContent = `User name: ${userStore.getState().user?.name || "None"}`;

  const unsubscribe = userStore.subscribe((state) => {
    const name = state.user?.name || "None";
    userName.textContent = `User name: ${name}`;
  });

  const userButton = document.createElement("button");
  userButton.type = "submit";
  userButton.textContent = "Add Name";

  const userForm = document.createElement("form");
  userForm.append(userName, userInput, userButton);

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = userInput.value;
    const user = new User({name});
    userStore.setUser({user});
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
