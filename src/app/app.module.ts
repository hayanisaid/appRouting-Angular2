import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {appListComponent}  from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    appListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
      
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
