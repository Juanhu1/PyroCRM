import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import { SitesComponent } from './sites/sites.component';

const routes: Routes =[
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
    //loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  },
  {
    path:'sites',
    component: SitesComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  }
     
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
    // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,    
    RouterModule.forRoot(routes)
  ],
  declarations: [
    DashboardComponent,
    ClientsComponent,
    SitesComponent
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
