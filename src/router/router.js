export default class Router {
  constructor(routes, context) {
    this.container = document.getElementById("root");
    this.routes = routes;
    this.context = context;
    this.currentPage = null;

    const notFoundPage = document.createElement("div");
    notFoundPage.textContent = "404 Not Found";
    this.notFoundPage = notFoundPage;
  }

  start() {
    window.addEventListener("popstate", async () => {
      await this.renderRoute(window.location.pathname);
    });

    document.addEventListener("click", async (e) => {
      const link = e.target.closest("a");
      if (!link) return;
      if (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) return;
      if (e.button !== 0) return;
      if (link.origin === window.location.origin) {
        e.preventDefault();
        await this.navigate(link.pathname);
      }
    });
  }

  async navigate(path) {
    history.pushState({}, "", path);
    await this.renderRoute(path);
  }

  async redirect(path) {
    history.replaceState({}, "", path);
    await this.renderRoute(path);
  }

  async createPage(route) {
    const module = await route.page(this.context);
    return module.default(this.context);
  }

  mountPage(page) {
    this.currentPage = page;
    this.container.replaceChildren(page.element);
  }

  async switchPage(route) {
    this.currentPage?.destroy?.();
    const page = await this.createPage(route);
    this.mountPage(page);
  }

  async renderRoute(path = window.location.pathname) {
    const route = this.routes.find((r) => r.path === path);

    if (!route) {
      this.container.replaceChildren(this.notFoundPage);
      return;
    }

    if (route.guard) {
      const result = route.guard(this.context);
      if (!result.allowed) {
        return await this.redirect(result.redirect);
      }
    }

    try {
      await this.switchPage(route);
    } catch (e) {
      console.error(e);
    }
  }
}
