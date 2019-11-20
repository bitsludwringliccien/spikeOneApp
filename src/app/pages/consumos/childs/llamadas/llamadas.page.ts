import { Component, OnInit } from '@angular/core';
import { ConsumosService } from '../../services/consumos.service';

@Component({
  selector: 'app-llamadas',
  templateUrl: './llamadas.page.html',
  styleUrls: ['./llamadas.page.scss'],
})
export class LlamadasPage implements OnInit {

  constructor(private consumosService: ConsumosService) { }

  ngOnInit() {
    const id = this.consumosService.lineSelected;
    this.consumosService.getConsumptionsById(id)
      .subscribe(
        consumos => {
          console.log(consumos);

        }
      );

  }

}
