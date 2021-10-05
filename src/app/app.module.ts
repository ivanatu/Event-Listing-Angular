import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EventCreateComponent } from './components/event-create/event-create.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventEditComponent } from './components/event-edit/event-edit.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './service/api.service';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

@NgModule({
  declarations: [
    AppComponent,
    EventCreateComponent,
    EventListComponent,
    EventEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    GooglePlaceModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }