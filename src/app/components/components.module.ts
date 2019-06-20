import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ItemComponent } from "./item/item.component";
import { ItemsComponent } from "./items/items.component";
import { StateService } from "../services/state/state.service";
import { IonicModule } from "@ionic/angular";

import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ChatRoomComponent } from "./chat-room/chat-room.component";
import { LoginChatComponent } from "./login-chat/login-chat.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
    // RouterModule.forChild([
    // {
    //   path: '',
    //   component: ItemsComponent
    // },
    // {
    //   path: '',
    //   component: ItemComponent
    // }
    // ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    ItemsComponent,
    ItemComponent,
    ChatRoomComponent,
    LoginChatComponent
  ],
  exports: [
    ItemsComponent,
    ItemComponent,
    ChatRoomComponent,
    LoginChatComponent
  ]
})
export class ComponentsModule {}
