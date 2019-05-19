import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { MapComponent } from './Components/map/map.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PicturesComponent } from './Components/pictures/pictures.component';
import { AppRoutingModule } from './app-routing.module';
import { ShareComponent } from './Components/share/share.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FilmsComponent } from './Components/films/films.component';
import { TripsComponent } from './Components/trips/trips.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { ShowMapWindowComponent } from './Components/show-map-window/show-map-window.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavbarComponent,
    PicturesComponent,
    ShareComponent,
    FilmsComponent,
    TripsComponent,
    SettingsComponent,
    ShowMapWindowComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MatIconModule,
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    NgbModule,
    NgbModule.forRoot(),
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
