import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MulticalendarComponent } from './multicalendar.component';



@NgModule({
  declarations: [MulticalendarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MulticalendarComponent
  ]
})
export class MulticalendarModule { }
