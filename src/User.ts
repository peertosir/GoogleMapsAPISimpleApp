import * as faker from 'faker';
import {Markable} from "./CustomMap";

export class User implements Markable{
    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string {
        return `<h1>${this.name}</h1>`
    }
}