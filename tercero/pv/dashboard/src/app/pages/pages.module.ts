import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin/admin.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ProductComponent } from './product/product.component';
import { CrudComponent } from './crud/crud.component';
import { PostmanComponent } from './postman/postman.component';

@NgModule({
  declarations: [
    PagesComponent,

    NopagesfoundComponent,
    AdminComponent,
    StudentsComponent,
    HomeComponent,
    DashboardComponent,
    ProductComponent,
    CrudComponent,
    PostmanComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ]
})
export class PagesModule { }
