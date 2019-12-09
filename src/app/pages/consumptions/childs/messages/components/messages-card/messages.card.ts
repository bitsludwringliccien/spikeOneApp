import { Component, OnInit } from "@angular/core";
import { ConsumptionsService } from "../../../../../../pages/consumptions/services/consumptions.service";
import { Message } from "../../../../../../core/interfaces/consumptions";

@Component({
  selector: "app-messages-card",
  templateUrl: "./messages.card.html",
  styleUrls: ["./messages.card.scss"]
})
export class MessagesCard implements OnInit {
  messages: Message[];

  constructor(private consumptionsService: ConsumptionsService) {}

  ngOnInit() {
    const id = this.consumptionsService.lineSelected;
    this.consumptionsService.getConsumptionsById(id).subscribe(consumos => {
      console.log(consumos);
      this.messages = consumos.messages;
    });
  }

  getStart(startDate: string) {
    console.log("mensajes", startDate);
  }

  getEnd(endDate: string) {
    console.log("mensajes", endDate);
  }
}
