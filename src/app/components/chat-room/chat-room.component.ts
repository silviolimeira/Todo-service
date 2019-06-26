import { Component, OnInit } from "@angular/core";

import { Socket } from "ng-socket-io";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { Observable, Subscription, Observer } from "rxjs";
import { ActivityComponent } from "src/app/controllers/activity.component";
import { Enrolled } from "src/app/models/enrolled";
import { StateService } from "src/app/services/state/state.service";
import { ActivityService } from "src/app/services/activity/activity.service";
import { Observable as MyObservable } from "../bind-callback";
import { Observable as MyObservable1 } from "../../rxjs-core/observable";
import { MyObservableWithSubscription } from "../../rxjs-core/observer-with-subscription";
import {
  FilterableObservable,
  MyObservable as MyObservable2
} from "../../rxjs-core/operator/observable";
import { defineBase } from "@angular/core/src/render3";

@Component({
  selector: "app-chat-room",
  templateUrl: "./chat-room.component.html",
  styleUrls: ["./chat-room.component.scss"]
})
export class ChatRoomComponent implements OnInit {
  messages = [];
  nickname = "";
  message = "";
  list: Observable<string[]>;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private socket: Socket,
    private toastCtrl: ToastController,
    private activity: ActivityService
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
        this.activity.remove(user);
        // let enrolled = new Enrolled();
        // enrolled.name = user;
        // let activity = new ActivityComponent(this.stateService);
        // activity.remove(enrolled);
      } else {
        // let enrolled = new Enrolled();
        // enrolled.name = user;
        // let activity = new ActivityComponent(this.stateService);
        // activity.add(enrolled);
        this.showToast("User:" + user);
        this.activity.add(user);
      }
    });

    let tests = 1;
    if (tests) {
      // {
      //   let fn = MyObservable.bindCallBack(cb => {
      //     setTimeout(() => cb("sicemal"), 3000);
      //   });
      //   const stream$ = fn();
      //   stream$.subscribe(data => console.log("data", data));
      // }
      // {
      //   let stream1$ = Observable.create(observer => {
      //     let counter = 0;
      //     let id = setInterval(() => {
      //       observer.next(counter++);
      //     }, 1000);
      //     return function cleanUpFn() {
      //       clearInterval(id);
      //     };
      //   });
      //   let subscription = stream1$.subscribe(data =>
      //     console.log("timer interval, data: ", data)
      //   );
      //   setTimeout(() => subscription.unsubscribe(), 10000);
      // }
      // {
      //   // test rxjs-core/Observer.ts
      //   let stream$ = MyObservable1.create(observer => observer.next(1)); //1
      //   let subscription = stream$.subscribe(data => {
      //     console.log("Observer with create, data: ", data);
      //   });
      // }
      // {
      //   // test rxjs-core/Observer-with-subscription.ts
      //   let streamWithSubscription$ = MyObservableWithSubscription.create(
      //     observer => {
      //       let counter = 0;
      //       let id = setInterval(() => observer.next(counter++), 1000);
      //       return function cleanUpFn() {
      //         clearInterval(id);
      //       };
      //     }
      //   );
      //   const subscription = streamWithSubscription$.subscribe(data => {
      //     console.log("MyObservableWithSubscription, data: ", data);
      //   });
      //   setTimeout(() => subscription.unsubscribe(), 5000);
      // }
      // {
      //   // Adding oberators
      //   // rxjs-core/operator/Observable.ts
      //   const stream$ = new MyObservable2(observer => {
      //     observer.next(1);
      //     observer.next(2);
      //     observer.next(3);
      //   }).filter(x => x > 2);
      //   stream$.subscribe(data =>
      //     console.log("FilterableObservable, MyObservable2 - data: ", data)
      //   );
      // }
    }
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
