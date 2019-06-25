import { Observer } from "./observer";

export class Subject {
  observers: Array<Observer>;
  _total: number;

  constructor() {
    this._total = 0;
    this.observers = new Array<Observer>();
  }

  attach(observer: Observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer);
    }
    this._total++;
  }

  detach(observer) {
    let index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers = this.observers.slice(index, 1);
    }
    if (this._total > 0) this._total--;
  }

  notify() {
    this.observers.forEach(observer => observer.update());
  }

  total() {
    return this._total;
  }
}
