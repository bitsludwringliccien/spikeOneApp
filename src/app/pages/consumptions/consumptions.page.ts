import { Component, OnInit } from "@angular/core";
import { ConsumptionsService } from "./services/consumptions.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-consumptions",
  templateUrl: "./consumptions.page.html",
  styleUrls: ["./consumptions.page.scss"]
})
export class ConsumptionsPage implements OnInit {
  constructor(
    private consumptionsService: ConsumptionsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSelectedLine(line: string) {
    console.log(line);
    this.consumptionsService.lineSelected = line;
  }
}
