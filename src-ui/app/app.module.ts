import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router' ;
import { CommonService } from "./CommonService";
import { HttpModule, Response } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientsComponent } from './clients/clients.component';
import { SitesComponent } from './sites/sites.component';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
