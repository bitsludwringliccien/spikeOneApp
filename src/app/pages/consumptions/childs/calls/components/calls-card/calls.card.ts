import { Component, OnInit } from "@angular/core";
import { ConsumptionsService } from "../../../../../../pages/consumptions/services/consumptions.service";
import { Call } from "../../../../../../core/interfaces/consumptions";

@Component({
  selector: "app-calls-card",
  templateUrl: "./calls.card.html",
  styleUrls: ["./calls.card.scss"]
})
export class CallsCard implements OnInit {
  calls: Call[];

  constructor(private consumptionsService: ConsumptionsService) { }

  ngOnInit() {
    this.getCalls();
  }

  async getCalls() {
    const id = this.consumptionsService.lineSelected;
    await this.consumptionsService.getConsumptionsById(id).then(consumos => {
      console.log(consumos);
      this.calls = consumos.calls;
    });
    console.log('get');

  }

  async filterRange(selectedRange: object) {
    console.log("llamadas", selectedRange);
    await this.getCalls();
    let newCalls = this.calls.filter(call => {
      console.log('inicial', call.eventDateTime, selectedRange.start, 'final', call.eventDateTime, selectedRange.end);
      console.log('inicial', Date.parse(call.eventDateTime) >= Date.parse(selectedRange.start), 'final', Date.parse(call.eventDateTime) <= Date.parse(selectedRange.end));

      return Date.parse(call.eventDateTime) >= Date.parse(selectedRange.start) && Date.parse(call.eventDateTime) <= Date.parse(selectedRange.end)
    });
    console.log(newCalls);
    this.calls = newCalls;

  }


}
