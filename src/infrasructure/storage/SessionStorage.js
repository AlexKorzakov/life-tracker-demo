export class SessionStorage {
  constructor(keys) {
    this._keys = keys;
  }

  getCurrentUserId() {
    return localStorage.getItem(this._keys.SESSION_USER_ID);
  }

  setCurrentUserId(id) {
    localStorage.setItem(this._keys.SESSION_USER_ID, id);
  }

  clearCurrentUserId() {
    localStorage.removeItem(this._keys.SESSION_USER_ID);
  }
}
