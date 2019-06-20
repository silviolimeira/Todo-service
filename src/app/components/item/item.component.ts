import { Component, OnInit, Input } from '@angular/core';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {

  mensagem: string;

  constructor(private service:StateService) { 
    this.mensagem = service.mensagem;
  }

  ngOnInit() {}

}
