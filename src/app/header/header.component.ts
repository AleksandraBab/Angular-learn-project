import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	@Output() toggleMenu: EventEmitter<void> = new EventEmitter<void>();
}
