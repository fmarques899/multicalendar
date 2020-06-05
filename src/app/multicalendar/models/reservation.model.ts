import { Guest } from './guest.model';

export class Reservation {
    constructor(
        public checkin: Date,
        public checkout: Date,
        public guest: Guest,
        public color: string
    ) {}
}