export default class UserStore {
  constructor() {
    this._state = {
      name: null,
      age: null,
      email: null,
      avatar: null,
      gender: null,
    };

    this.listeners = new Set();
  }

  get name() {
    return this._state.name;
  }

  set name(name) {
    this._state.name = name;
    this.notify(name);
  }

  subscribe(fn) {
    this.listeners.add(fn);
    return () => {
      this.listeners.delete(fn);
    };
  }

  notify(data) {
    this.listeners.forEach((fn) => fn(data));
  }
}
