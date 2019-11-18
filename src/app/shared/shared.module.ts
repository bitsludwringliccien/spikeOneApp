import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { HeaderComponent } from './components/header/header.component';






@NgModule({
  declarations: [TabBarComponent, HeaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [TabBarComponent, HeaderComponent]
})
export class SharedModule { }
