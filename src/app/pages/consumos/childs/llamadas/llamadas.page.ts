import { Component, OnInit } from '@angular/core';
import { ConsumosService } from '../../services/consumos.service';
import { Call } from '../../../../core/interfaces/consumptions';

@Component({
  selector: 'app-llamadas',
  templateUrl: './llamadas.page.html',
  styleUrls: ['./llamadas.page.scss'],
})
export class LlamadasPage implements OnInit {

  llamadas: Call[];

  constructor(private consumosService: ConsumosService) { }

  ngOnInit() {
    const id = this.consumosService.lineSelected;
    this.consumosService.getConsumptionsById(id)
      .subscribe(
        consumos => {
          console.log(consumos);
          this.llamadas = consumos.calls;
        }
      );

  }


  getStart(startDate: string) {
    console.log('llamadas', startDate);
  }

  getEnd(endDate: string) {
    console.log('llamadas', endDate);

  }

}
