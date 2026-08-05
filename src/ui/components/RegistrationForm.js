import Input from "./Input";
export default function RegistrationForm({
  type,
}) {
  const form = document.createElement("form");
  form.className = `${type}-form`;

  const p = document.createElement("h2");
  p.className = "registration-form_title";
  p.textContent = `${type[0].toUpperCase() + type.slice(1)} form`;

  const emailLabel = document.createElement("label");
  emailLabel.htmlFor = "email";
  emailLabel.textContent = "Email";
  const email = Input({
    className: "auth-form-input",
    type: "email",
    name: "email",
    autocomplete: "email",
  });
  email.id = "email";
  email.required = true;
  email.placeholder = "Email";

  const nameLabel = document.createElement("label");
  nameLabel.htmlFor = "name";
  nameLabel.textContent = "Name";
  const name = Input({
    className: "auth-form-input",
    type: "text",
    name: "name",
    autocomplete: "name",
  });
  name.id = "name";
  name.required = true;
  name.placeholder = "Name";
  name.minLength = 2;
  name.maxLength = 50;

  const dateOfBirthLabel = document.createElement("label");
  dateOfBirthLabel.htmlFor = "dateOfBirth";
  dateOfBirthLabel.textContent = "Date of Birth";
  const dateOfBirth = Input({
    className: "auth-form-input",
    type: "date",
    name: "dateOfBirth",
    autocomplete: "bday",
  });
  dateOfBirth.id = "dateOfBirth";
  dateOfBirth.required = true;

  const genderFieldset = document.createElement("fieldset");
  const genderFieldsetLegend = document.createElement("legend");
  genderFieldsetLegend.textContent = "Select a gender:";

  const maleContainer = document.createElement("div");
  const genderMaleInput = Input({
    className: "auth-form-input",
    type: "radio",
    id: "male",
    name: "gender",
    value: "male",
  });
  genderMaleInput.required = true;
  const genderMaleLabel = document.createElement("label");
  genderMaleLabel.htmlFor = "male";
  genderMaleLabel.textContent = "Male";
  maleContainer.append(genderMaleInput, genderMaleLabel);

  const femaleContainer = document.createElement("div");
  const genderFemaleInput = Input({
    className: "auth-form-input",
    type: "radio",
    id: "female",
    name: "gender",
    value: "female",
  });
  genderFemaleInput.required = true;
  const genderFemaleLabel = document.createElement("label");
  genderFemaleLabel.htmlFor = "female";
  genderFemaleLabel.textContent = "Female";
  femaleContainer.append(genderFemaleInput, genderFemaleLabel);

  genderFieldset.append(genderFieldsetLegend, maleContainer, femaleContainer);

  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Sign Up";

  form.append(p, emailLabel, email, nameLabel, name, dateOfBirthLabel, dateOfBirth, genderFieldset, button);

  return form;
}
