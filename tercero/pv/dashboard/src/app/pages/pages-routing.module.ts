import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CrudComponent } from './crud/crud.component';
import { PostmanComponent } from './postman/postman.component';

const routes: Routes = [

  // rutas hijas para el componente students con salida a product
  { 
    path:'students',
    component:StudentsComponent, 
    children:[
      { 
        path:'product',
        component:ProductComponent
      } ,
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'crud',
        component:CrudComponent
      },
      {
        path:'postman',
        component:PostmanComponent
      }
    ]
  },
  { path:'admin', component: AdminComponent},
  { path:'home',component:HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
