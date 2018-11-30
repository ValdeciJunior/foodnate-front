import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MesasComponent } from './mesas/mesas.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MesasComponent
  ],
  imports: [
    SweetAlert2Module.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
