import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTableModule } from "angular-6-datatable";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { AppheaderComponent } from './components/home/appheader/appheader.component';
import { AppfooterComponent } from './components/home/appfooter/appfooter.component';
import { AppmenuComponent } from './components/home/appmenu/appmenu.component';
import { AppsettingsComponent } from './components/home/appsettings/appsettings.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ApptableComponent } from './components/home/apptable/apptable.component';

import { UsersService } from "./services/users.service";


const appRoute = Routes[
  {path:'/home', component:ApptableComponent},
  {path:'/', redirectTo:'/home', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingsComponent,
    HomeComponent,
    ApptableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTableModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
