import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConsumosService } from '../../../pages/consumos/services/consumos.service';
import { Line } from '../../../core/interfaces/line';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Output() selectedLine: EventEmitter<string> = new EventEmitter<string>();
  lines: Line[];
  constructor(private consumosSevices: ConsumosService) { }

  ngOnInit() {
    this.consumosSevices.getLines()
      .subscribe(
        lines => {
          console.log(lines);
          return this.lines = lines;
        }
      );

  }

  selectLine(value) {
    console.log(value);
    this.selectedLine.emit(value);
  }

}
