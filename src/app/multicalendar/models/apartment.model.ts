import { Reservation } from './reservation.model';
import { Occurrance } from './occurrance.model';

export class Apartment {
    
    constructor(
        public id?: number,
        public title?: string,
        public reservations?: Reservation[],
        public occurrancies?: Occurrance[]
    ) { }
}