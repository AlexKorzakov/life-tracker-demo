export async function authenticateUser({
  userRepository,
  sessionStorage,
  userStore,
  email,
}) {
  const user = await userRepository.findByEmail(email);
  if (!user) {
    throw new Error("Invalid email");
  }

  sessionStorage.setCurrentUserId(user.id);
  userStore.setUser(user);
}
