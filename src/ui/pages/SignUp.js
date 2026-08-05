import RegistrationForm from "../components/RegistrationForm";
import { registerUser } from "../../application/auth/registerUser";

export default function SignUpPage(context) {
  const container = document.createElement("div");
  container.className = "sign up page";

  const pageHeader = document.createElement("h1");
  pageHeader.textContent = "Sign up Page!";

  const registrationForm = RegistrationForm({ type: "registration" });

  container.append(pageHeader, registrationForm);

  registrationForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      const email = form.elements.email.value;
      const name = form.elements.name.value;
      const dateOfBirth = form.elements.dateOfBirth.value;
      const gender = form.elements.gender.value;
      const formData = { email, name, dateOfBirth, gender };

      try {
        await registerUser({ ...context, formData });
        await context.router.redirect("/");
      } catch (err) {
        console.error(`Registration error: ${err}`);
        alert("Registration error, try again later.");
      }
    }
  });

  return {
    element: container,
    // destroy() {
    //   unsubscribe();
    // }
  };
}
