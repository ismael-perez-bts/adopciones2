import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PerrosComponent } from './perros/perros.component';
import { PerroComponent } from './perro/perro.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CreateDogComponent } from './create-dog/create-dog.component';
import { LoginService } from './login.service';
import { AuthGuard} from './auth.guard';
import { CreatePersonComponent } from './create-person/create-person.component'
import { ApiDogService } from './api-dog.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    PerrosComponent,
    PerroComponent,
    LoginComponent,
    CreateDogComponent,
    CreatePersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
