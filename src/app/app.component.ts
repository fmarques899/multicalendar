import { Component, OnInit } from '@angular/core';
import { Apartment } from './multicalendar/models/apartment.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multicalendar';

  public apartments: Apartment[] = [
    {
      "id": 1,
      "title": "Casa SHIN Qi 12 Lote 7, 11",
      "reservations": [{
        checkin: new Date("2020-06-01"),
        checkout: new Date("2020-06-08"),
        guest: {
          name: "Sam Rothstein",
          phone: "5561981494249"
        },
        color: "#f54242"
      },
      {
        checkin: new Date("2020-06-09"),
        checkout: new Date("2020-06-10"),
        guest: {
          name: "Ginger Rothstein",
          phone: "5561981494249"
        },
        color: "#f54242"
      },
      {
        checkin: new Date("2020-11-09"),
        checkout: new Date("2020-11-10"),
        guest: {
          name: "Frank Navarro",
          phone: "5561981494249"
        },
        color: "#f54242"
      }
      ],
      "occurrancies": [
        {
          startDate: new Date("2020-06-17"),
          endDate: new Date("2020-06-18"),
          type: 'Manutenção'
        }
      ]
    },
    {
      "id": 2,
      "title": "QMSW 5, Lote 9",
      "reservations": [{
        checkin: new Date("2020-06-06"),
        checkout: new Date("2020-06-11"),
        guest: {
          name: "Nicky Santoro",
          phone: "5561981494249"
        },
        color: "#0f75f2"
      }]
    },
  ]

  constructor() { }
}
