import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'app-login-chat',
  templateUrl: './login-chat.component.html',
  styleUrls: ['./login-chat.component.scss'],
})
export class LoginChatComponent implements OnInit {

  ngOnInit(): void {

  }

  nickname = '';
  
  constructor(
    /*public navCtrl: NavController,*/ public router: Router,
    private socket: Socket
  ) {}

  joinChat() {
    this.socket.connect();
    this.socket.emit("set-nickname", this.nickname);
    // this.navCtrl.push('ChatRoomPage', {nickname: this.nickname});
    this.router.navigate(["/home/", { nickname: this.nickname }]);
  }

}
