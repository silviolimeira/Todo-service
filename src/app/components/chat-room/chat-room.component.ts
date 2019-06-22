import { Component, OnInit } from "@angular/core";

import { Socket } from "ng-socket-io";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { Observable } from "rxjs";
import { ActivityComponent } from "src/app/controllers/activity.component";
import { Enrolled } from "src/app/models/enrolled";
import { StateService } from "src/app/services/state/state.service";

@Component({
  selector: "app-chat-room",
  templateUrl: "./chat-room.component.html",
  styleUrls: ["./chat-room.component.scss"]
})
export class ChatRoomComponent implements OnInit {
  messages = [];
  nickname = "";
  message = "";

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private socket: Socket,
    private toastCtrl: ToastController,
    private stateService: StateService
  ) {}

  ngOnInit() {
    this.nickname = this.route.snapshot.paramMap.get("nickname");

    this.getMessages().subscribe(message => {
      this.messages.push(message);
    });

    this.getUsers().subscribe(data => {
      let user = data["user"];
      if (data["event"] === "left") {
        this.showToast("User left: " + user);
        let enrolled = new Enrolled();
        enrolled.name = user;
        let activity = new ActivityComponent(this.stateService);
        activity.remove(enrolled);
      } else {
        let enrolled = new Enrolled();
        enrolled.name = user;
        let activity = new ActivityComponent(this.stateService);
        activity.add(enrolled);
      }
    });
  }

  sendMessage() {
    this.socket.emit("add-message", { text: this.message });
  }

  getMessages() {
    let observable = new Observable<any>(observer => {
      this.socket.on("message", data => {
        observer.next(data);
      });
    });
    return observable;
  }

  getUsers() {
    let observable = new Observable<any>(observer => {
      this.socket.on("users-changed", data => {
        observer.next(data);
      });
    });
    return observable;
  }

  showToast(msg) {
    console.log("###################### ##>> showToast(msg): ", msg);
    // let toast = this.toastCtrl.create({
    //   message: msg,
    //   duration: 2000
    // });
    // toast.present();
    let toast = this.toastCtrl
      .create({
        message: msg,
        duration: 2000
      })
      .then(toastData => {
        console.log(toastData);
        toastData.present();
      });
  }
}
