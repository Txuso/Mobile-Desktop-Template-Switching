import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FlightLeg } from './flight-leg.interface';

export class FlightLegComponent {
	@Input() flightLegs: FlightLeg[] = [];
	@Output() select = new EventEmitter<FlightLeg>();

	heading = 'Flight legs Desktop';

	selectFl(flightleg: FlightLeg) {
		this.select.emit(flightleg);
	}
}
