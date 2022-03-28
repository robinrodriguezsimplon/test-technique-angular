import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { MatAdapterService } from "./services/mat-adapter.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: MatAdapterService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
