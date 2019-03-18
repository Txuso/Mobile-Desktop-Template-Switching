import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FlightLegDesktopComponent } from './flight-leg/flight-leg-desktop.component';
import { FlightLegMobileComponent } from './flight-leg/flight-leg-mobile.component';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [ AppComponent, FlightLegDesktopComponent, FlightLegMobileComponent ],
	imports: [ BrowserModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
