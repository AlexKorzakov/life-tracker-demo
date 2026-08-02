export async function restoreSession({ sessionStorage, userRepository, userStore }) {
  const currentUserId = sessionStorage.getCurrentUserId();
  if (!currentUserId) {
    return;
  }

  const user = await userRepository.findById(currentUserId);
  if (!user) {
    sessionStorage.clearCurrentUserId();
    return;
  }
  userStore.setUser(user);
}
