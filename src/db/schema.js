export default function setupSchema(event) {
  // event.target - IDBOpenDBRequest instance
  const db = event.target.result; // IDBDatabase instance
  console.log(`Upgrading to version ${db.version}`);

  const objectStore = db.createObjectStore("user", { keyPath: "id", autoIncrement: true });
  return objectStore;
}
