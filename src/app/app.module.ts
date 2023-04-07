import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from "@angular/material/table";
import { NetflexComponent } from './sheard/component/netflex/netflex.component';
import { NetflexCardComponent } from './sheard/component/netflex-card/netflex-card.component';
import { NavbarComponent } from './sheard/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SearchingPipe } from "./sheard/pipe/searching.pipe"

@NgModule({
  declarations: [
    AppComponent,
    NetflexComponent,
    NetflexCardComponent,
    NavbarComponent,
    SearchingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
