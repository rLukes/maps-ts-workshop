import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPaarse: string;

  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPaarse = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.latitude())
    };
  }

  markerContent(): string {
    return `<div><h2>company name : ${this.companyName}</h2>
    <h3>catchphrase: ${this.catchPaarse}</h3>
    </div>
    `;
  }
}
