import { Component, OnInit, Input } from "@angular/core";
import { Call } from "src/app/core/interfaces/consumptions";

@Component({
  selector: "app-calls-lists",
  templateUrl: "./calls-lists.component.html",
  styleUrls: ["./calls-lists.component.scss"]
})
export class CallsListsComponent implements OnInit {
  @Input() calls: Call[];

  constructor() {}

  ngOnInit() {}
}
