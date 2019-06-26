interface Subscription {
  unsubscribe();
}

class Observer {
  constructor(private dataFn) {}
  next(value) {
    this.dataFn(value);
  }
}

export class MyObservableWithSubscription {
  behaviourFn;
  static create(behaviourFn): MyObservableWithSubscription {
    return new MyObservableWithSubscription(behaviourFn);
  }
  constructor(behaviourFn) {
    this.behaviourFn = behaviourFn;
  }
  subscribe(dataFn): Subscription {
    let observer = new Observer(dataFn);
    let cleanUpFn = this.behaviourFn(observer);
    return { unsubscribe: cleanUpFn };
  }
}

// export class ObserverWithSubscription {}
