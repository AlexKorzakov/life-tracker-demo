export class UserRepository {
  constructor(db) {
    this.db = db;
  }

  addUser(data) {
    const { username, age } = data
    // data validation
    return new Promise((resolve, reject) => {
      try {
        const transaction = this.db.transaction("user", "readwrite");
        transaction.onerror = (event) => {
          console.error(`\u274e Transaction error: ${event.target.error}`);
          reject(event.target.error);
        };
        transaction.oncomplete = (event) => {
          console.log(`\u2705 Transaction completed: modifications finished`);
        };
        // transaction.onabort = (event) => {
        //   console.warn(`\u26a0 Transaction aborted: ${event.target.error}`);
        // };
        const objectStore = transaction.objectStore("user");
        const objectStoreRequest = objectStore.add({
          username: username,
          age: age,
          createdAt: new Date().toISOString()
        });
        objectStoreRequest.onerror = (event) => {
          console.error(`\u274e Failed to add user ${username}`);
          reject(event.target.error);
        };
        objectStoreRequest.onsuccess = (event) => {
          resolve(event.target.result);
        };
      } catch (e) {
        console.error(`\u274e ${e}`);
        reject(e);
      }
    });
  }
}
