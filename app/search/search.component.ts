import { Component, OnInit } from "@angular/core";
import { SearchBar } from "ui/search-bar";
import { IDataItem, DataService } from "~/core/data.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    items: Array<IDataItem>;

    constructor(
        private itemService: DataService,
        private router: RouterExtensions
    ) {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    onSubmit(args) {
        const searchBar = <SearchBar>args.object;
        alert("You are searching for " + searchBar.text);
    }

    onTextChanged(args) {
        const searchBar = <SearchBar>args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
    }
}
