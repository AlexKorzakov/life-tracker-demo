import setupSchema from "./schema.js";

export function openDB() {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open("lifeFlowDB", 1);

    request.onerror = (event) => {
      console.error(`Error: ${event.target.error?.message}`);
      reject(event.target.error);
    };

    request.onupgradeneeded = (event) => {
      setupSchema(event);
    };

    request.onsuccess = (event) => {
      resolve(event.target.result); // IDBDatabase instance
    };
  });
}
