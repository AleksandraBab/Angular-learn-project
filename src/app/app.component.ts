import { Component, ViewChild } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	@ViewChild('sidenav') sidenav!: SidenavComponent;

	public toggleMenu(): void {
		this.sidenav.drawer.toggle();
	}
}
