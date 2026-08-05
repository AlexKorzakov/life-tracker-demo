import User from "../../domain/User";

export async function registerUser({
  userRepository,
  sessionStorage,
  userStore,
  formData,
}) {
  const existingUser = await userRepository.findByEmail(formData.email);
  if (existingUser) {
    throw new Error("Пользователь с таким email уже сущесвует");
  }

  let user = User.fromDTO(formData)

  try {
    const savedUser = await userRepository.save(user);
    userStore.setUser(savedUser.toDTO());
    sessionStorage.setCurrentUserId(savedUser.id);
  } catch (err) {
    if (err.name === "ConstraintError") {
      throw new Error("User with this email already exists");
    }
    throw err;
  }
};
