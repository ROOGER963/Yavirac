import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagesfoundComponent } from './pages/nopagesfound/nopagesfound.component';
import { AuthRoutingModule } from './pages/auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/auth/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NopagesfoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
