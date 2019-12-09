import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ConsumptionsPageRoutingModule } from "./consumptions-routing.module";

import { ConsumptionsPage } from "./consumptions.page";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumptionsPageRoutingModule,
    SharedModule
  ],
  declarations: [ConsumptionsPage]
})
export class ConsumptionsPageModule {}
