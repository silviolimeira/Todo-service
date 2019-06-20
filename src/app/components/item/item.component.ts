import { Component, OnInit, Input } from '@angular/core';
import { StateService } from 'src/app/services/state/state.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  
  nickname = '';

  message: string = '';
  message1: string = '';

  constructor(private service:StateService) { 
    //this.mensagem = '';
    //this.mensagem1 = '';
  }

  ngOnInit() {
    // this.trataMensagem1("123").subscribe(mensagem1 => {
    //   //this.mensagem = mensagem1;
    //   let mensagem = mensagem1["mensagem"];
    //   console.log('##### ##> mensagem1: ', mensagem1);
    // });
  }

  sendMessage(data: string) {
    // console.log('##### ##> trataMensagem1: ', data);
    // let observable = new Observable<any>(observer => {
    //   observer.next(data);
    // });
    // return observable;
    console.log('##### ##> sendMessage(): ');
    console.log('##### ##> mensagem: ', this.message.length);
  }

}
