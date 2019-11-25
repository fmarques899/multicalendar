import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MulticalendarModule } from './multicalendar/multicalendar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MulticalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
