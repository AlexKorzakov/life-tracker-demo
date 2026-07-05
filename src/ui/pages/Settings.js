export default function SettingsPage() {
  const container = document.createElement("div");
  container.className = "settings page";

  const pageHeader = document.createElement("p");
  pageHeader.textContent = "Settings Page";

  container.appendChild(pageHeader);

  return container;
}
