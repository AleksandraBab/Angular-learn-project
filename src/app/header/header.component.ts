import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	@Output() toggleMenu: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private router: Router,
  ) {}

  public goHome(): void {
    this.router.navigate(['/'])
  }
}
