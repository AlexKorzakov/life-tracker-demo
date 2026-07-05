export default class Router {
  constructor() {
    this.container = document.getElementById("root");
    this.routes = [
      {
        path: "/",
        component: () => import("../ui/pages/Home"),
      },
      {
        path: "/settings",
        component: () => import("../ui/pages/Settings"),
      },
    ];
    this.currentPath = window.location.pathname;

    const notFoundPage = document.createElement("div");
    notFoundPage.textContent = "Not Found";
    this.notFoundPage = notFoundPage;

    window.addEventListener("popstate", () => {
      this.handleRoute(window.location.pathname);
    });

    document.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (!link) return;
      if (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) return;
      if (e.button !== 0) return;
      if (link.origin === window.location.origin) {
        e.preventDefault();
        this.navigate(link.pathname);
      }
    });
  }

  navigate(path) {
    history.pushState({}, "", path);
    this.handleRoute(path);
  }

  async handleRoute(path = window.location.pathname) {
    const route = this.routes.find((r) => r.path === path);

    if (!route) {
      this.container.replaceChildren(this.notFoundPage);
      return;
    }

    try {
      const module = await route.component();
      const page = module.default;
      this.container.replaceChildren(page());
    } catch (e) {
      console.log(e);
    }
  }
}
