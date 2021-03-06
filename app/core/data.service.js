"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataService = /** @class */ (function () {
    function DataService() {
        this.items = new Array({
            id: 1,
            name: "0223 Delfim Serralheiro",
            description: "8:00h às 17:45h"
        }, {
            id: 2,
            name: "0223 Luiz Cavalcante",
            description: "8:22h às 18:00h"
        }, {
            id: 3,
            name: "010584 Socorro Holanda",
            description: "8:00h às 17:45h"
        }, {
            id: 4,
            name: "010740 Quitério Lobo",
            description: "8:00h às 17:45h"
        }, {
            id: 5,
            name: "011142 Amandio Alencastre",
            description: "8:00h às 17:45h"
        }, {
            id: 6,
            name: "011293 Ximena Cantanhede",
            description: "8:00h às 17:45h"
        }, {
            id: 7,
            name: "011393 Eloi Paião",
            description: "8:00h às 17:45h"
        }, {
            id: 8,
            name: "011736 Priscila Regalado",
            description: "8:00h às 17:45h"
        }, {
            id: 9,
            name: "012064 Antónia Regalado",
            description: "8:00h às 17:45h"
        }, {
            id: 10,
            name: "012172 Cândida Ataí",
            description: "8:00h às 17:45h"
        });
    }
    DataService.prototype.getItems = function () {
        return this.items;
    };
    DataService.prototype.getItem = function (id) {
        return this.items.filter(function (item) { return item.id === id; })[0];
    };
    DataService = __decorate([
        core_1.Injectable()
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBUzNDO0lBREE7UUFHWSxVQUFLLEdBQUcsSUFBSSxLQUFLLENBQ3JCO1lBQ0ksRUFBRSxFQUFFLENBQUM7WUFDTCxJQUFJLEVBQUUseUJBQXlCO1lBQy9CLFdBQVcsRUFBRSxpQkFBaUI7U0FDakMsRUFDRDtZQUNJLEVBQUUsRUFBRSxDQUFDO1lBQ0wsSUFBSSxFQUFFLHNCQUFzQjtZQUM1QixXQUFXLEVBQUUsaUJBQWlCO1NBQ2pDLEVBQ0Q7WUFDSSxFQUFFLEVBQUUsQ0FBQztZQUNMLElBQUksRUFBRSx3QkFBd0I7WUFDOUIsV0FBVyxFQUFFLGlCQUFpQjtTQUNqQyxFQUNEO1lBQ0ksRUFBRSxFQUFFLENBQUM7WUFDTCxJQUFJLEVBQUUsc0JBQXNCO1lBQzVCLFdBQVcsRUFBRSxpQkFBaUI7U0FDakMsRUFDRDtZQUNJLEVBQUUsRUFBRSxDQUFDO1lBQ0wsSUFBSSxFQUFFLDJCQUEyQjtZQUNqQyxXQUFXLEVBQUUsaUJBQWlCO1NBQ2pDLEVBQ0Q7WUFDSSxFQUFFLEVBQUUsQ0FBQztZQUNMLElBQUksRUFBRSwwQkFBMEI7WUFDaEMsV0FBVyxFQUFFLGlCQUFpQjtTQUNqQyxFQUNEO1lBQ0ksRUFBRSxFQUFFLENBQUM7WUFDTCxJQUFJLEVBQUUsbUJBQW1CO1lBQ3pCLFdBQVcsRUFBRSxpQkFBaUI7U0FDakMsRUFDRDtZQUNJLEVBQUUsRUFBRSxDQUFDO1lBQ0wsSUFBSSxFQUFFLDBCQUEwQjtZQUNoQyxXQUFXLEVBQUUsaUJBQWlCO1NBQ2pDLEVBQ0Q7WUFDSSxFQUFFLEVBQUUsQ0FBQztZQUNMLElBQUksRUFBRSx5QkFBeUI7WUFDL0IsV0FBVyxFQUFFLGlCQUFpQjtTQUNqQyxFQUNEO1lBQ0ksRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUscUJBQXFCO1lBQzNCLFdBQVcsRUFBRSxpQkFBaUI7U0FDakMsQ0FDSixDQUFDO0lBU04sQ0FBQztJQVBHLDhCQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLEVBQVU7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBN0RRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTtPQUNBLFdBQVcsQ0E4RHZCO0lBQUQsa0JBQUM7Q0FBQSxBQTlERCxJQThEQztBQTlEWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhSXRlbSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgaXRlbXMgPSBuZXcgQXJyYXk8SURhdGFJdGVtPihcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBuYW1lOiBcIjAyMjMgRGVsZmltIFNlcnJhbGhlaXJvXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCI4OjAwaCDDoHMgMTc6NDVoXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICBuYW1lOiBcIjAyMjMgTHVpeiBDYXZhbGNhbnRlXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCI4OjIyaCDDoHMgMTg6MDBoXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBuYW1lOiBcIjAxMDU4NCBTb2NvcnJvIEhvbGFuZGFcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIjg6MDBoIMOgcyAxNzo0NWhcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgIG5hbWU6IFwiMDEwNzQwIFF1aXTDqXJpbyBMb2JvXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCI4OjAwaCDDoHMgMTc6NDVoXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDUsXG4gICAgICAgICAgICBuYW1lOiBcIjAxMTE0MiBBbWFuZGlvIEFsZW5jYXN0cmVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIjg6MDBoIMOgcyAxNzo0NWhcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNixcbiAgICAgICAgICAgIG5hbWU6IFwiMDExMjkzIFhpbWVuYSBDYW50YW5oZWRlXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCI4OjAwaCDDoHMgMTc6NDVoXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDcsXG4gICAgICAgICAgICBuYW1lOiBcIjAxMTM5MyBFbG9pIFBhacOjb1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiODowMGggw6BzIDE3OjQ1aFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA4LFxuICAgICAgICAgICAgbmFtZTogXCIwMTE3MzYgUHJpc2NpbGEgUmVnYWxhZG9cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIjg6MDBoIMOgcyAxNzo0NWhcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogOSxcbiAgICAgICAgICAgIG5hbWU6IFwiMDEyMDY0IEFudMOzbmlhIFJlZ2FsYWRvXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCI4OjAwaCDDoHMgMTc6NDVoXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEwLFxuICAgICAgICAgICAgbmFtZTogXCIwMTIxNzIgQ8OibmRpZGEgQXRhw61cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIjg6MDBoIMOgcyAxNzo0NWhcIlxuICAgICAgICB9XG4gICAgKTtcblxuICAgIGdldEl0ZW1zKCk6IEFycmF5PElEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcbiAgICB9XG5cbiAgICBnZXRJdGVtKGlkOiBudW1iZXIpOiBJRGF0YUl0ZW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKVswXTtcbiAgICB9XG59XG4iXX0=