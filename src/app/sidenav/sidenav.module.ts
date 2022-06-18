import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SideNavRoutingModule } from './sidenav-routing.module';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@NgModule({
	declarations: [SidenavComponent, MenuItemComponent],
	imports: [CommonModule, MatSidenavModule, MatButtonModule, SideNavRoutingModule, MatIconModule],
	exports: [SidenavComponent],
})
export class SidenavModule {}
