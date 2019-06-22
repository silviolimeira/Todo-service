import { Component, OnInit, OnDestroy } from "@angular/core";
import { StateService } from "src/app/services/state/state.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-total-enrolleds",
  templateUrl: "./total-enrolleds.component.html",
  styleUrls: ["./total-enrolleds.component.scss"]
})
export class TotalEnrolledsComponent implements OnInit, OnDestroy {
  totalEnrolled = Observable.create(observer => {
    let counter = 0;
    let id = setInterval(
      () => observer.next(this.stateService.totalEmrolled()),
      10000
    );
    return function cleanFn() {
      clearInterval(id);
    };
  });

  constructor(private stateService: StateService) {}

  ngOnInit() {

  }

  ngOnDestroy() {

  }
}
