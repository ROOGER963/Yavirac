import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPagesFoundComponent } from './pages/no-pages-found/no-pages-found.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CategoryComponent } from './component/category/category.component';
import { ProductComponent } from './component/product/product.component';


const routes: Routes = [
  {path: 'dashboard ', component: DashboardComponent },

  {path: 'login ', component: LoginComponent },
  {path: 'register ', component: RegisterComponent },
  {path: 'product ', component: ProductComponent },
  {path: 'category ', component: CategoryComponent },
  {path: 'login ', redirectTo'/dashbord', pathMath'full'},
  {path: '** ', component: NoPagesFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 