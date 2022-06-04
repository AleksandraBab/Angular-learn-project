import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-error',
	templateUrl: './404.component.html',
	styleUrls: ['./404.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {
  constructor(
    private router: Router,
  ) {}

  public goBack(): void {
    this.router.navigate(['/'])
  }
}
