import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuard } from './_guards/index';
import {routing} from './app.routing'
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/index';
import {LoginserviceService} from './loginservice.service';
import {HttpModule} from "@angular/http";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,RegisterComponent, HomeComponent
    
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [AuthGuard,LoginserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
