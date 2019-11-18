import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumosPageRoutingModule } from './consumos-routing.module';

import { ConsumosPage } from './consumos.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumosPageRoutingModule,
    SharedModule
  ],
  declarations: [ConsumosPage]
})
export class ConsumosPageModule { }
