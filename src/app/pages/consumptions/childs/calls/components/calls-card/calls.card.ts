import { Component, OnInit } from '@angular/core';
import { ConsumptionsService } from '../../../../../../pages/consumptions/services/consumptions.service';
import { Call } from '../../../../../../core/interfaces/consumptions';

@Component({
  selector: 'app-calls-card',
  templateUrl: './calls.card.html',
  styleUrls: ['./calls.card.scss'],
})
export class CallsCard implements OnInit {

  calls: Call[];

  constructor(private consumptionsService: ConsumptionsService) { }

  ngOnInit() {
    const id = this.consumptionsService.lineSelected;
    this.consumptionsService.getConsumptionsById(id)
      .subscribe(
        consumos => {
          console.log(consumos);
          this.calls = consumos.calls;
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
