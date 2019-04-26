import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObraListComponent } from './modules/Obra/obra-list/obra-list.component';
import { CustomHeaderComponent } from './modules/custom-header/custom-header.component';
import { SideBarComponent } from './modules/side-bar/side-bar.component';
import { ObraCreateComponent } from './modules/Obra/obra-create/obra-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ObraDetailComponent } from './modules/Obra/obra-detail/obra-detail.component';
import {MomentModule} from "angular2-moment";

@NgModule({
  declarations: [
    AppComponent,
    ObraListComponent,
    CustomHeaderComponent,
    SideBarComponent,
    ObraCreateComponent,
    ObraDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
