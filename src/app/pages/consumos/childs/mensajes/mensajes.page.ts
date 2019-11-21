import { Component, OnInit } from '@angular/core';
import { ConsumosService } from '../../services/consumos.service';
import { Message } from '../../../../core/interfaces/consumptions';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage implements OnInit {

  mensajes: Message[];

  constructor(private consumosService: ConsumosService) { }

  ngOnInit() {
    const id = this.consumosService.lineSelected;
    this.consumosService.getConsumptionsById(id)
      .subscribe(
        consumos => {
          console.log(consumos);
          this.mensajes = consumos.messages;

        }
      );

  }

  getStart(startDate: string) {
    console.log('mensajes', startDate);
  }

  getEnd(endDate: string) {
    console.log('mensajes', endDate);

  }

}
