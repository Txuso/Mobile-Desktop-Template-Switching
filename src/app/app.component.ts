import { ApplicationStateService } from './application-state.service';
import { Component } from '@angular/core';
import { FlightLeg } from './flight-leg/flight-leg.interface';

const flightLegsData: FlightLeg[] = [
	{ id: 0, from: 'Bilbao', to: 'Barcelona', iata: 'LEBL', icao: 'MAD' },
	{ id: 1, from: 'Barcelona', to: 'Madrid', iata: 'LEBL', icao: 'MAD' },
	{ id: 2, from: 'Sant Baudilio', to: 'Gernika', iata: 'LEBL', icao: 'MAD' }
];
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	displayMobile;
	flightlegs = flightLegsData;
	selectedFlightLeg = flightLegsData[0];

	constructor(private applicationStateService: ApplicationStateService) {
		this.displayMobile = applicationStateService.getIsMobileResolution();
	}

	selectFlightLeg(fl: FlightLeg) {
		this.selectedFlightLeg = fl;
	}
}
