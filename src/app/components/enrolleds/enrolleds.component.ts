import { Component, OnInit } from "@angular/core";
import { StateService } from "src/app/services/state/state.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-enrolleds",
  templateUrl: "./enrolleds.component.html",
  styleUrls: ["./enrolleds.component.scss"]
})
export class EnrolledsComponent implements OnInit {
  list: Observable<string[]>;

  constructor(private stateService: StateService) {
    this.list = this.stateService.getEnrolledsObservervable();
  }

  ngOnInit() {}
}
