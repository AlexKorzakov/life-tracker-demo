import LoginForm from "../components/LoginForm";
import { authenticateUser } from "../../application/auth/authenticateUser";

export default function SignInPage(context) {
  const container = document.createElement("div");
  container.className = "sign in page";

  const loginForm = LoginForm();

  container.append(loginForm);

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = new FormData(loginForm).get("email");
    try {
      await authenticateUser({ ...context, email });
      await context.router.redirect("/");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }

  });

  return {
    element: container,
    // destroy() {
    //   unsubscribe();
    // }
  };
}
