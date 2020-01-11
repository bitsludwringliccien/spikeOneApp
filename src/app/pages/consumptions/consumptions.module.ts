import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumptionsPageRoutingModule } from './consumptions-routing.module';

import { ConsumptionsPage } from './consumptions.page';
import { SharedModule } from '../../shared/shared.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
// import { ThemeableBrowser } from '@ionic-native/themeable-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumptionsPageRoutingModule,
    SharedModule,

  ],
  providers: [
    // ThemeableBrowser,
    InAppBrowser
  ],
  declarations: [ConsumptionsPage]
})
export class ConsumptionsPageModule { }
