import Input from "./Input";

export default function LoginForm(context) {
  const form = document.createElement("form");
  form.className = "login-form";

  const title = document.createElement("h2");
  title.className = "login-form_title";
  title.textContent = "Sign in to LifeTracker";

  const loginLabel = document.createElement("label");
  loginLabel.htmlFor = "login";
  loginLabel.textContent = "Email address";

  const login = Input({
    className: "auth-form-input",
    type: "email",
    name: "email",
    autocomplete: "username",
  });
  login.id = "email";
  login.required = true;

  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Sign in"

  const signUp = document.createElement("div");
  signUp.className = "signUp";

  const textSpan = document.createElement("span");
  textSpan.textContent = "New to LifeTracker? ";

  const signUpLink = document.createElement("a");
  signUpLink.href = "/signup";
  signUpLink.textContent = "Create an account";

  signUp.append(textSpan, signUpLink);

  form.append(title, loginLabel, login, button, signUp);

  return form;
}
