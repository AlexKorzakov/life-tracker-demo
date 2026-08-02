export default function SignUpPage(context) {
  const container = document.createElement("div");
  container.className = "sign up page";

  const pageHeader = document.createElement("h1");
  pageHeader.textContent = "Sign up Page!";

  container.append(pageHeader);

  return {
    element: container,
    // destroy() {
    //   unsubscribe();
    // }
  };
}
