import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
	@ViewChild('sidenav') sidenav!: SidenavComponent;

	public toggleMenu(): void {
		this.sidenav.toggleMenu();
	}
}
