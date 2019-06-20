import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { ItemsComponent } from './items/items.component';
import { StateService } from '../services/state/state.service';

@NgModule({
  declarations: [ItemComponent, ItemsComponent],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ItemComponent, ItemsComponent]


})
export class ComponentsModule { }
