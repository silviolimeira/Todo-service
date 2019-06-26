import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ItemComponent } from "./item/item.component";
import { ItemsComponent } from "./items/items.component";
import { IonicModule } from "@ionic/angular";

import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ChatRoomComponent } from "./chat-room/chat-room.component";
import { LoginChatComponent } from "./login-chat/login-chat.component";
import { ControllersModule } from "../controllers/controllers.module";
import { TotalEnrolledsComponent } from "./total-enrolleds/total-enrolleds.component";
import { EnrolledsComponent } from "./enrolleds/enrolleds.component";
import { FilterableObservableComponent } from "./filterable-observable/filterable-observable.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
    // ControllersModule
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
    LoginChatComponent,
    TotalEnrolledsComponent,
    EnrolledsComponent,
    FilterableObservableComponent
  ],
  exports: [
    ItemsComponent,
    ItemComponent,
    ChatRoomComponent,
    LoginChatComponent,
    TotalEnrolledsComponent,
    EnrolledsComponent,
    FilterableObservableComponent
  ]
})
export class ComponentsModule {}
