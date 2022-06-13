import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductComponent } from './product.component';

@NgModule({
	declarations: [ProductComponent],
	imports: [CommonModule, MatSidenavModule, MatButtonModule, HttpClientModule, MatProgressSpinnerModule],
	providers: [],
	exports: [ProductComponent],
})
export class ProductModule {}
