import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { ProductsListModule } from '../products-list/products-list.module';
import { SideNavRoutingModule } from './sidenav-routing.module';
import { AboutComponent } from '../about/about.component';

@NgModule({
	declarations: [SidenavComponent, AboutComponent],
	imports: [CommonModule, MatSidenavModule, MatButtonModule, SideNavRoutingModule],
	exports: [SidenavComponent],
})
export class SidenavModule {}
