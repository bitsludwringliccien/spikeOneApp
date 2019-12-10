import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Line } from "../../../core/interfaces/line";
import { environment } from "../../../../environments/environment";
import { Consumptions } from "../../../core/interfaces/consumptions";

@Injectable({
  providedIn: "root"
})
export class ConsumptionsService {
  lineSelected = "3123901700";

  constructor(private http: HttpClient) { }

  async getLines() {
    return await this.http.get<Line[]>(`${environment.bUrl}/lines`).toPromise();
  }

  async getConsumptionsById(id: string) {
    return await this.http.get<Consumptions>(
      `${environment.bUrl}/consumptions/${id}`
    ).toPromise();
  }
}
