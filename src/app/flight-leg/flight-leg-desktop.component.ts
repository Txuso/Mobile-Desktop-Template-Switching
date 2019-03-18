import { Component } from '@angular/core';
import { FlightLegComponent } from './flight-leg.component';

@Component({
	selector: 'app-flight-leg-desktop',
	template: `
    <h1>{{heading}}</h1>
    <table>
      <tr>
        <td>From</td>
        <td>To</td>
		  <td>IATA</td>
		  <td>ICAO</td>
      </tr>
      <tr *ngFor="let fl of flightLegs">
        <td>{{fl.from}}</td>
        <td>{{fl.to}}</td>
		  <td>{{fl.iata}}</td>
		  <td>{{fl.icao}}</td>
        <td><button (click)="selectFl(fl)">Select</button></td>
      </tr>
    </table>
  `
})
export class FlightLegDesktopComponent extends FlightLegComponent {}
