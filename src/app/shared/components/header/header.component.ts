import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Line } from "../../../core/interfaces/line";
import { ConsumptionsService } from "src/app/pages/consumptions/services/consumptions.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Output() selectedLine: EventEmitter<string> = new EventEmitter<string>();
  lines: Line[];
  constructor(private consumptionsService: ConsumptionsService) {}

  ngOnInit() {
    this.consumptionsService.getLines().subscribe(lines => {
      console.log(lines);
      return (this.lines = lines);
    });
  }

  selectLine(value) {
    console.log(value);
    this.selectedLine.emit(value);
  }
}
