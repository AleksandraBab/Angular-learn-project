import { Component, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
	@ViewChild('drawer') drawer!: MatDrawer;

	constructor(public cd: ChangeDetectorRef) {}

	public toggleMenu(): void {
		this.drawer.toggle();
		this.cd.markForCheck();
	}
}
