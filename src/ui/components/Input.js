export default function Input({ className, type, name, autocomplete = "on" }) {
  const input = document.createElement("input");
  input.className = className;
  input.type = type;
  input.name = name;
  input.autocomplete = autocomplete;
  return input;
}
