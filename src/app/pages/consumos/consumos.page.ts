import { Component, OnInit } from '@angular/core';
import { ConsumosService } from './services/consumos.service';

@Component({
  selector: 'app-consumos',
  templateUrl: './consumos.page.html',
  styleUrls: ['./consumos.page.scss'],
})
export class ConsumosPage implements OnInit {

  constructor(private consumosServices: ConsumosService) { }

  ngOnInit() {
  }

  onSelectedLine(line: string) {
    console.log(line);
    this.consumosServices.lineSelected = line;

  }

}
