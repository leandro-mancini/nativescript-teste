"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var MyHttpGetService = /** @class */ (function () {
    function MyHttpGetService(http) {
        this.http = http;
        this.serverUrl = "https://cpereira-escala.azurewebsites.net/Api/";
    }
    MyHttpGetService.prototype.obterEscala = function () {
        // tslint:disable-next-line:max-line-length
        return this.http.get(this.serverUrl + "EscalaPadrao/ObterEscala?idEscalaPadrao=3&datas=2018-07-13T03:00:00.000Z");
    };
    MyHttpGetService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], MyHttpGetService);
    return MyHttpGetService;
}());
exports.MyHttpGetService = MyHttpGetService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNjYWxhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlc2NhbGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw2Q0FBNkU7QUFHN0U7SUFHSSwwQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUY1QixjQUFTLEdBQUcsZ0RBQWdELENBQUM7SUFFN0IsQ0FBQztJQUV6QyxzQ0FBVyxHQUFYO1FBQ0ksMkNBQTJDO1FBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLDBFQUEwRSxDQUFDLENBQUM7SUFDdEgsQ0FBQztJQVJRLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFO3lDQUlpQixpQkFBVTtPQUgzQixnQkFBZ0IsQ0FTNUI7SUFBRCx1QkFBQztDQUFBLEFBVEQsSUFTQztBQVRZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIGFzIFJ4T2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE15SHR0cEdldFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmwgPSBcImh0dHBzOi8vY3BlcmVpcmEtZXNjYWxhLmF6dXJld2Vic2l0ZXMubmV0L0FwaS9cIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICAgIG9idGVyRXNjYWxhKCkge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnNlcnZlclVybCArIFwiRXNjYWxhUGFkcmFvL09idGVyRXNjYWxhP2lkRXNjYWxhUGFkcmFvPTMmZGF0YXM9MjAxOC0wNy0xM1QwMzowMDowMC4wMDBaXCIpO1xyXG4gICAgfVxyXG59Il19