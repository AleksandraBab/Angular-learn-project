import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
	selector: '[appPickItem]',
})
export class PickItemDirective {
	private isScaled: boolean = false;
	@HostBinding('style.transform')
	private get transform(): string {
		this.isScaled = !this.isScaled;
		return this.isScaled ? 'scale(1)' : 'scale(1.03)';
	}

	@HostListener('mouseenter') onMouseEnter(): void {
		this.isScaled = true;
	}

	@HostListener('mouseleave') onMouseLeave(): void {
		this.isScaled = false;
	}
}
