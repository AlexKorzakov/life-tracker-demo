import User from "../../domain/User";

export async function registerUser({
  userRepository,
  sessionStorage,
  userStore,
  router,
  formData,
}) {
  const user = new User(formData);
  const userId = userRepository.addUser(user);

  sessionStorage.setCurrentUserId(userId);

  userStore.setUser(user);

  await router.navigate("/dashboard");
};
