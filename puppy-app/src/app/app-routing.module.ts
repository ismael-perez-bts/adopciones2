import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PerrosComponent } from './perros/perros.component';
import {CreateDogComponent} from './create-dog/create-dog.component'
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'adoptar',component:PerrosComponent},
  {path:'agregar',component: CreateDogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
