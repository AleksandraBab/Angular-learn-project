import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { SidenavModule } from '../sidenav/sidenav.module';
import { ProductComponent } from '../product/product.component';

@NgModule({
	declarations: [HomeComponent, HeaderComponent, FooterComponent, ProductComponent],
	imports: [CommonModule, HomeRoutingModule, MatButtonModule, SidenavModule, MatToolbarModule, MatIconModule, MatTabsModule],
	exports: [HomeComponent],
})
export class HomeModule {}
