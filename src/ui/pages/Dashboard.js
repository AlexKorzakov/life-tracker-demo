export default function DashboardPage({userStore}) {
  const container = document.createElement("div");
  container.className = "dashboard page";

  const pageHeader = document.createElement("h1");
  pageHeader.textContent = "Dashboard Page!";

  container.append(pageHeader);
  console.log(userStore);

  return {
    element: container,
  };
}
