import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material";

@Injectable({
  providedIn: "root",
})
export class MatAdapterService extends MatPaginatorIntl {
  constructor() {
    super();
    this.translatePaginator();
  }
  translatePaginator() {
    this.itemsPerPageLabel = "Personnes par pages";
    this.firstPageLabel = "Première page";
    this.lastPageLabel = "Dernière page";
    this.nextPageLabel = "Page suivante";
    this.previousPageLabel = "Page précédente";
  }
}
