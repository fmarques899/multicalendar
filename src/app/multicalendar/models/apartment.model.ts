import { Reservation } from './reservation.model';

export class Apartment {
    
    constructor(
        public id?: number,
        public title?: string,
        public reservations?: Reservation[]
    ) { }
}