import { Component, OnInit } from '@angular/core';
import { ConsumosService } from '../../services/consumos.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage implements OnInit {

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
