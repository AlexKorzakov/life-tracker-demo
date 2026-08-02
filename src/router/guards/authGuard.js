export function authGuard({ userStore }) {
  const isAuth = Boolean(userStore.getState().user);
  return {
    allowed: isAuth,
    redirect: "/login",
  };
}
