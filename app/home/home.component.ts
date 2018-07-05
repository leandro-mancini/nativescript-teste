import { Component, OnInit } from "@angular/core";
import { MyHttpGetService } from "~/core/escala/escala.service";
import { EscalaServicoViewModel } from "~/core/models/escala-servico-view-model";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.css"],
    providers: [MyHttpGetService]
})
export class HomeComponent implements OnInit {
    escalaServicoViewModel: Array<EscalaServicoViewModel>;
    loading: boolean = false;

    constructor(
        private myService: MyHttpGetService
    ) { }

    ngOnInit(): void {
        this.obterEscala();
    }

    obterEscala() {
        this.loading = true;

        this.myService.obterEscala().subscribe((resp: any) => {
            this.escalaServicoViewModel = new Array<EscalaServicoViewModel>();

            for (let i = 0; i < resp.data.length; i++) {
                this.escalaServicoViewModel[i] = new EscalaServicoViewModel();
                this.escalaServicoViewModel[i] = resp.data[i];
            }

            this.loading = false;
        });
    }
}
