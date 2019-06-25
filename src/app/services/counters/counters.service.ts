import { Injectable } from "@angular/core";

import { StateService } from "../state/state.service";
import { Observer as myObserver } from "../state/observer";
import { ActivityService } from "../activity/activity.service";
import { Observable, Observer } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CountersService {
  observable: Observable<number>;
  observer: Observer<number>;

  constructor() {
    this.observable = new Observable((observer: Observer<number>) => {
      this.observer = observer;
    });
  }
}
