import { Injectable } from "@angular/core";
import { Observable as RxObservable } from "rxjs";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

@Injectable()
export class MyHttpGetService {
    private serverUrl = "https://cpereira-escala.azurewebsites.net/Api/";

    constructor(private http: HttpClient) { }

    obterEscala() {
        // tslint:disable-next-line:max-line-length
        return this.http.get(this.serverUrl + "EscalaPadrao/ObterEscala?idEscalaPadrao=15&datas=2018-07-12T03:00:00.000Z");
    }
}