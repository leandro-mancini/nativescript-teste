"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var escala_service_1 = require("~/core/escala/escala.service");
var escala_servico_view_model_1 = require("~/core/models/escala-servico-view-model");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(myService) {
        this.myService = myService;
        this.loading = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.obterEscala();
    };
    HomeComponent.prototype.obterEscala = function () {
        var _this = this;
        this.loading = true;
        this.myService.obterEscala().subscribe(function (resp) {
            _this.escalaServicoViewModel = new Array();
            for (var i = 0; i < resp.data.length; i++) {
                _this.escalaServicoViewModel[i] = new escala_servico_view_model_1.EscalaServicoViewModel();
                _this.escalaServicoViewModel[i] = resp.data[i];
            }
            _this.loading = false;
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ["./home.css"],
            providers: [escala_service_1.MyHttpGetService]
        }),
        __metadata("design:paramtypes", [escala_service_1.MyHttpGetService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwrREFBZ0U7QUFDaEUscUZBQWlGO0FBU2pGO0lBSUksdUJBQ1ksU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFIdkMsWUFBTyxHQUFZLEtBQUssQ0FBQztJQUlyQixDQUFDO0lBRUwsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUFBLGlCQWFDO1FBWkcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFTO1lBQzdDLEtBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLEtBQUssRUFBMEIsQ0FBQztZQUVsRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3hDLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLGtEQUFzQixFQUFFLENBQUM7Z0JBQzlELEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xELENBQUM7WUFFRCxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF6QlEsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3pCLFNBQVMsRUFBRSxDQUFDLGlDQUFnQixDQUFDO1NBQ2hDLENBQUM7eUNBTXlCLGlDQUFnQjtPQUw5QixhQUFhLENBMEJ6QjtJQUFELG9CQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIn4vY29yZS9lc2NhbGEvZXNjYWxhLnNlcnZpY2VcIjtcbmltcG9ydCB7IEVzY2FsYVNlcnZpY29WaWV3TW9kZWwgfSBmcm9tIFwifi9jb3JlL21vZGVscy9lc2NhbGEtc2Vydmljby12aWV3LW1vZGVsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9ob21lLmNzc1wiXSxcbiAgICBwcm92aWRlcnM6IFtNeUh0dHBHZXRTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBlc2NhbGFTZXJ2aWNvVmlld01vZGVsOiBBcnJheTxFc2NhbGFTZXJ2aWNvVmlld01vZGVsPjtcbiAgICBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBteVNlcnZpY2U6IE15SHR0cEdldFNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub2J0ZXJFc2NhbGEoKTtcbiAgICB9XG5cbiAgICBvYnRlckVzY2FsYSgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLm15U2VydmljZS5vYnRlckVzY2FsYSgpLnN1YnNjcmliZSgocmVzcDogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVzY2FsYVNlcnZpY29WaWV3TW9kZWwgPSBuZXcgQXJyYXk8RXNjYWxhU2Vydmljb1ZpZXdNb2RlbD4oKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVzY2FsYVNlcnZpY29WaWV3TW9kZWxbaV0gPSBuZXcgRXNjYWxhU2Vydmljb1ZpZXdNb2RlbCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXNjYWxhU2Vydmljb1ZpZXdNb2RlbFtpXSA9IHJlc3AuZGF0YVtpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==