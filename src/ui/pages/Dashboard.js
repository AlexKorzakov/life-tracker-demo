import LogoutButton from "../components/LogoutButton";
import { logoutUser } from "../../application/auth/logoutUser";

export default function DashboardPage(context) {
  const container = document.createElement("div");
  container.className = "dashboard page";

  const pageHeader = document.createElement("h1");
  pageHeader.textContent = "Dashboard Page!";

  const logoutButton = LogoutButton(async () => {
    await logoutUser(context);
    context.router.redirect("/");
  })

  container.append(pageHeader, logoutButton);
  console.log(context.userStore);

  return {
    element: container,
  };
}
