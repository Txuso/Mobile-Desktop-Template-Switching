import { Component } from '@angular/core';
import { FlightLegComponent } from './flight-leg.component';

@Component({
	selector: 'app-flight-leg-mobile',
	template: `
    <h1>{{heading}}</h1>
    <ul>
      <li *ngFor="let fl of flightLegs">
        {{fl.from}} - {{fl.to}} <br>
        {{fl.iata}} - {{fl.icao}} <br>
        <button (click)="selectFl(fl)">Select</button>
      </li>
    </ul>
  `
})
export class FlightLegMobileComponent extends FlightLegComponent {
	heading = 'Flight Legs Mobile';
}
