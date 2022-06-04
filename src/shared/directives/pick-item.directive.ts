import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
	selector: '[appPickItem]',
})
export class PickItemDirective {
	private isActive: boolean = false;
	@HostBinding('style.transform')
	private get transform(): string {
		return this.isActive ? 'scale(1.03)' : 'scale(1)';
	}

  @HostBinding('style.boxShadow')
	private get shadow(): string {
		return this.isActive ? '0px 0px 10px 5px #5f58361f' : '0px 0px 4px 3px #1818181f';
	}

	@HostListener('mouseenter') onMouseEnter(): void {
		this.isActive = true;
	}

	@HostListener('mouseleave') onMouseLeave(): void {
		this.isActive = false;
	}
}
