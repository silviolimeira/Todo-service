import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { ItemsComponent } from './items/items.component';
import { StateService } from '../services/state/state.service';
import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
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
  declarations: [ItemsComponent, ItemComponent],
  exports: [ItemsComponent, ItemComponent]


})
export class ComponentsModule { }
