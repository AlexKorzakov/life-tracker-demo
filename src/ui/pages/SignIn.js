export default function SignInPage(context) {
  const container = document.createElement("div");
  container.className = "sign in page";

  const pageHeader = document.createElement("h1");
  pageHeader.textContent = "Sign in Page!";

  const signUp = document.createElement("div");
  signUp.className = "signUp";

  const textSpan = document.createElement("span");
  textSpan.textContent = "New to LifeTracker? ";

  const signUpLink = document.createElement("a");
  signUpLink.href = "/signup";
  signUpLink.textContent = "Create an account";

  signUp.append(textSpan, signUpLink);

  container.append(pageHeader, signUp);

  return {
    element: container,
    // destroy() {
    //   unsubscribe();
    // }
  };
}
