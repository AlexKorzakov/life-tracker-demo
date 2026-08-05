export default class User {
  constructor({
    id,
    email,
    name,
    dateOfBirth,
    gender,
    createdAt,
    updatedAt,
  }) {
    this.id = id || null;
    this.email = email;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.createdAt = createdAt || new Date().toISOString();
    this.updatedAt = updatedAt || new Date().toISOString();
  }

  toDTO() {
    const dto = {
      email: this.email,
      name: this.name,
      dateOfBirth: this.dateOfBirth,
      gender: this.gender,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
    if (this.id) dto.id = this.id;
    return dto;
  }

  static fromDTO(dto) {
    return new User(dto);
  }

  isAdult() {
    return (new Date().getFullYear() - new Date(this.dateOfBirth).getFullYear()) >= 18;
  }
}
