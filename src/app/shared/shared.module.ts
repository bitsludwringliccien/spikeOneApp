import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';






@NgModule({
  declarations: [TabBarComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [TabBarComponent]
})
export class SharedModule { }
