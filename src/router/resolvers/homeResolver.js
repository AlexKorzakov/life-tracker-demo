export function homeResolver({ userStore }) {
  return Boolean(userStore.getState().user)
    ? import("../../ui/pages/Dashboard")
    : import("../../ui/pages/Home");
}
