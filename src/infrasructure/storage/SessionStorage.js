export class SessionStorage {
  constructor(keys) {
    this._keys = keys;
  }

  getCurrentUserId() {
    const value = localStorage.getItem(this._keys.SESSION_USER_ID);
    const id = Number(value);
    return (Number.isInteger(id) && id > 0) ? id : null;
  }

  setCurrentUserId(id) {
    localStorage.setItem(this._keys.SESSION_USER_ID, id);
  }

  clearCurrentUserId() {
    localStorage.removeItem(this._keys.SESSION_USER_ID);
  }
}
