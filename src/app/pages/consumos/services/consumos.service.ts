import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Line } from 'src/app/core/interfaces/line';
import { Consumptions } from 'src/app/core/interfaces/consumptions';

@Injectable({
  providedIn: 'root'
})
export class ConsumosService {

  lineSelected = '3123901700';

  constructor(private http: HttpClient) { }

  getLines() {
    return this.http.get<Line[]>(`${environment.bUrl}/lines`);
  }

  getConsumptionsById(id: string) {
    return this.http.get<Consumptions>(`${environment.bUrl}/consumptions/${id}`);
  }

}
