import { Component, OnInit, Input } from '@angular/core';
import { Apartment } from './models/apartment.model';

@Component({
  selector: 'app-multicalendar',
  templateUrl: './multicalendar.component.html',
  styleUrls: ['./multicalendar.component.scss']
})
export class MulticalendarComponent implements OnInit {

  @Input()
  public url: string;

  @Input()
  public apartments: Apartment[] = [];

  public days: any[] = [];

  constructor() { }

  ngOnInit() {
    this.setInitial();
  }

  private setInitial() {

    for (let i = 0; i < 7; i++) {
      const day = new Date();
      const dayNext = this.addDay(day, i);
      this.days.push(dayNext);
    }

  }
  private addDay(date: Date, plus: number) {
    const dateToOperation = new Date(date);
    date.setDate(dateToOperation.getDate() + plus);
    return date;
  }

}
