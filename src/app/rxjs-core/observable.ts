class Observer {
  constructor(private dataFn) {}
  next(value) {
    this.dataFn(value);
  }
}
export class Observable {
  behaviourFn;
  static create(behaviourFn): Observable {
    return new Observable(behaviourFn);
  }
  constructor(behaviourFn) {
    this.behaviourFn = behaviourFn;
  }
  subscribe(dataFn) {
    let observer = new Observer(dataFn);
    this.behaviourFn(observer);
  }
}
