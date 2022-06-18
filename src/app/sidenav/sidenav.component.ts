import { Component, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { ICategory } from 'src/shared/models';
import { ProductsApiService } from 'src/shared/services/products-api.service';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
	@ViewChild('drawer') drawer!: MatDrawer;
  public categories$!: Observable<Array<ICategory>>;

	constructor(
    private cd: ChangeDetectorRef,
    private productsService: ProductsApiService,
  ) {}

  public ngOnInit(): void {
    this.categories$ = this.productsService.getCategories();
  }

	public toggleMenu(): void {
		this.drawer.toggle();
		this.cd.markForCheck();
	}
}
