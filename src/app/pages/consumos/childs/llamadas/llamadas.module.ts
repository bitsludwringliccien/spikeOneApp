import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LlamadasPageRoutingModule } from './llamadas-routing.module';

import { LlamadasPage } from './llamadas.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LlamadasPageRoutingModule,
    SharedModule
  ],
  declarations: [LlamadasPage]
})
export class LlamadasPageModule { }
