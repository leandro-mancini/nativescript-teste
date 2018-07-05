import { Component, OnInit } from "@angular/core";
import { DataService, IDataItem } from "~/core/data.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html",
    styleUrls: ["./browser.component.css"]
})
export class BrowseComponent implements OnInit {
    items: Array<IDataItem>;

    constructor(
        private itemService: DataService,
        private router: RouterExtensions
    ) {}

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
}
