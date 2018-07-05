import { Injectable } from "@angular/core";

export interface IDataItem {
    id: number;
    name: string;
    description: string;
}

@Injectable()
export class DataService {

    private items = new Array<IDataItem>(
        {
            id: 1,
            name: "0223 Delfim Serralheiro",
            description: "8:00h às 17:45h"
        },
        {
            id: 2,
            name: "0223 Luiz Cavalcante",
            description: "8:22h às 18:00h"
        },
        {
            id: 3,
            name: "010584 Socorro Holanda",
            description: "8:00h às 17:45h"
        },
        {
            id: 4,
            name: "010740 Quitério Lobo",
            description: "8:00h às 17:45h"
        },
        {
            id: 5,
            name: "011142 Amandio Alencastre",
            description: "8:00h às 17:45h"
        },
        {
            id: 6,
            name: "011293 Ximena Cantanhede",
            description: "8:00h às 17:45h"
        },
        {
            id: 7,
            name: "011393 Eloi Paião",
            description: "8:00h às 17:45h"
        },
        {
            id: 8,
            name: "011736 Priscila Regalado",
            description: "8:00h às 17:45h"
        },
        {
            id: 9,
            name: "012064 Antónia Regalado",
            description: "8:00h às 17:45h"
        },
        {
            id: 10,
            name: "012172 Cândida Ataí",
            description: "8:00h às 17:45h"
        }
    );

    getItems(): Array<IDataItem> {
        return this.items;
    }

    getItem(id: number): IDataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
