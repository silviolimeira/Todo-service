import { Component, OnInit } from "@angular/core";
import { Enrolleds } from "../models/enrolleds";
import { Enrolled } from "../models/enrolled";

@Component({
  selector: "app-activity",
  templateUrl: "./activity.component.html",
  styleUrls: ["./activity.component.scss"]
})
export class ActivityComponent implements OnInit {
  enrolleds: Enrolleds;

  constructor() {
    this.enrolleds = new Enrolleds();
  }


  ngOnInit() {
    this.enrolleds = new Enrolleds();
  }

  add(enrolled: Enrolled) {
    // let enrolled = new Enrolled();
    // enrolled.name = user;
    console.log("##### ##> enrolled:", enrolled);
    this.enrolleds.add(enrolled);
    console.log('##### ##>> ActivityComponent.add: ', enrolled);
  }

  public remove(enrolled: Enrolled) {
    this.enrolleds.remove(enrolled);
  }
}
