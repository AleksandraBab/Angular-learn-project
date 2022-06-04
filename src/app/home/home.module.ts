import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SidenavModule } from '../sidenav/sidenav.module';
import { ProductsListModule } from '../products-list/products-list.module';

@NgModule({
	declarations: [HomeComponent, HeaderComponent, FooterComponent],
	imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
		SidenavModule,
    ProductsListModule,
    MatToolbarModule,
    MatIconModule,
  ],
	exports: [HomeComponent],
})
export class HomeModule {}
