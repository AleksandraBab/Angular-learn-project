import { MatDrawer } from '@angular/material/sidenav';
import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef, HostListener } from '@angular/core';
import { ICategory } from 'src/shared/models';

@Component({
	selector: 'app-menu-item',
	templateUrl: './menu-item.component.html',
	styleUrls: ['./menu-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemComponent {
	@Input() category!: ICategory;
	@Input() drawer!: MatDrawer;
	public visibility: boolean = false;
	@HostListener('mouseenter') onMouseEnter(): void {
		this.visibility = true;
	}
	@HostListener('mouseleave') onMouseLeave(): void {
		this.visibility = false;
	}

	public closeMenu(): void {
		this.drawer.toggle();
	}
}
