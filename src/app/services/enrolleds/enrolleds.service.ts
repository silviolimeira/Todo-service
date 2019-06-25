import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EnrolledsService {
  observable: Observable<string[]>;
  observer: Observer<string[]>;

  constructor() {
    this.observable = new Observable((observer: Observer<string[]>) => {
      this.observer = observer;
    });
  }
}
