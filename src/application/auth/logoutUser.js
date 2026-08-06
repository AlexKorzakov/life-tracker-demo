export async function logoutUser({
  sessionStorage,
  userStore,
}) {
  userStore.clear();
  sessionStorage.clearCurrentUserId();
}
