class MyObserver {
  constructor(private dataFn) {}
  next(value) {
    this.dataFn(value);
  }
}

export class MyObservable {
  behaviourFn;
  static create(behaviourFn): MyObservable {
    return new MyObservable(behaviourFn);
  }
  constructor(behaviourFn) {
    this.behaviourFn = behaviourFn;
  }
  filter(filterFn): FilterableObservable {
    return new FilterableObservable(filterFn, this.behaviourFn);
  }
  subscribe(dataFn) {
    let observer = new MyObserver(dataFn);
    let cleanUpFn = this.behaviourFn(observer);
    return {
      unsubscribe: cleanUpFn
    };
  }
}

export class FilterableObservable extends MyObservable {
  constructor(private filterFn, behaviourFn) {
    super(behaviourFn);
  }

  subscribe(dataFn) {
    let observer = new MyObserver(dataFn);
    observer.next = value => {
      if (this.filterFn(value)) {
        dataFn(value);
      }
    };
    let cleanUpFn = this.behaviourFn(observer);
    return { unsubscribe: cleanUpFn };
  }
}
