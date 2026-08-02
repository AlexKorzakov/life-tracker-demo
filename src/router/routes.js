import { authGuard } from "./guards/authGuard";
import { homeResolver } from "./resolvers/homeResolver";

export const routes = [
  {
    path: "/",
    page: homeResolver,
  },
  {
    path: "/login",
    page: () => import("../ui/pages/SignIn"),
  },
  {
    path: "/signup",
    page: () => import("../ui/pages/SignUp"),
  },
  {
    path: "/settings",
    page: () => import("../ui/pages/Settings"),
    guard: authGuard,
  }
];
