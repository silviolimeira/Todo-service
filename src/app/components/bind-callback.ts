export class Observable {
  behaviorFn;
  constructor(behaviorFn) {
    this.behaviorFn = behaviorFn;
  }
  static bindCallBack(behaviorFn): Function {
    return (): Observable => {
      return new Observable(behaviorFn);
    };
  }
  subscribe(dataCb) {
    this.behaviorFn(dataCb);
  }
}
