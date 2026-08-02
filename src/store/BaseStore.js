export default class BaseStore {
  constructor(initialState = {}) {
    this._state = initialState;
    this.listeners = new Set();
  }

  getState() {
    return this._state;
  }

  setState(patch) {
    this._state = { ...this._state, ...patch };
    this.notify(patch);
  }

  subscribe(fn) {
    this.listeners.add(fn);
    return () => {
      this.listeners.delete(fn);
    };
  }

  notify(state) {
    this.listeners.forEach((fn) => fn(state));
  }
};
