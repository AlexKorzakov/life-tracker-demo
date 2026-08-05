export default function Input({ className, type, name, autocomplete = "on", id, value }) {
  const input = document.createElement("input");
  input.className = className;
  input.type = type;
  input.name = name;
  input.autocomplete = autocomplete;
  input.id = id;
  if (value) {
    input.value = value;
  }
  return input;
}
