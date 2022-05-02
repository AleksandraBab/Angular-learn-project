import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss'],
	//changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
	@ViewChild('drawer') drawer!: MatDrawer;

	constructor() {}
}
