import { userStore } from "../../store";

export default function SettingsPage() {
  const container = document.createElement("div");
  container.className = "settings page";

  const pageHeader = document.createElement("p");
  pageHeader.textContent = "Settings Page";

  const userName = document.createElement("div");
  userName.className = "userName";
  userName.textContent = `User name: ${userStore.name}`;

  const backHome = document.createElement("a");
  backHome.href = "/";
  backHome.textContent = "Back to Home";

  container.append(pageHeader, userName, backHome);

  return { element: container };
}
