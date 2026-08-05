import User from "../domain/User";

export class UserRepository {
  constructor(db) {
    this.db = db;
  }

  // провести рефактор методов (addUser/save), называть простыми именами (delete, save, findAll, etc)
  // фабрика для создания промисов (не вручную)
  // логгирование убрать, выбрасывать ошибки наверх
  // не создвать доменные поля (createdAt) - делать в доменной модели
  // убрать валидацию
  // работать с доменной сущностью

  save(user) {
    const data = user.toDTO();
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
        const objectStoreRequest = objectStore.add(data);
        objectStoreRequest.onerror = (event) => {
          console.error(`\u274e Failed to add user ${username}`);
          reject(event.target.error);
        };
        objectStoreRequest.onsuccess = (event) => {
          const userId = event.target.result;
          resolve(User.fromDTO({ ...data, id: userId }));
        };
      } catch (e) {
        console.error(`\u274e ${e}`);
        reject(e);
      }
    });
  }

  findById(id) {
    return new Promise((resolve, reject) => {
      try {
        const transaction = this.db.transaction("user", "readonly");
        transaction.onerror = (event) => {
          console.error(`\u274e Transaction error: ${event.target.error}`);
          reject(event.target.error);
        };
        transaction.onsuccess = (event) => {
          console.log(`\u274e Transaction completed: modifications finished`);
        };

        const objectStore = transaction.objectStore("user");
        const objectStoreRequest = objectStore.get(id);
        objectStoreRequest.onerror = (event) => {
          console.error(`\u274e Object Store Request error: ${event.target.error}`);
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

  findByEmail(email) {
    return new Promise((resolve, reject) => {
      try {
        const transaction = this.db.transaction("user", "readonly");
        transaction.onerror = (event) => {
          console.error(`\u274e Transaction error: ${event.target.error}`);
          reject(event.target.error);
        };
        transaction.onsuccess = (event) => {
          console.log(`\u274e Transaction completed: modifications finished`);
        };

        const objectStore = transaction.objectStore("user");
        const objectStoreRequest = objectStore.get(email);
        objectStoreRequest.onerror = (event) => {
          console.error(`\u274e Object Store Request error: ${event.target.error}`);
          reject(event.target.error);
        };
        objectStoreRequest.onsuccess = (event) => {
          resolve(event.target.result || null);
        };
      } catch (e) {
        console.error(`\u274e ${e}`);
        reject(e);
      }
    })
  }

  findAll() {

  }

  delete(id) {

  }
}
