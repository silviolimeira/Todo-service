import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivityComponent } from './activity.component';

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
  declarations: [
    ActivityComponent,
  ],
  exports: [
    ActivityComponent
  ]
})
export class ControllersModule { }
