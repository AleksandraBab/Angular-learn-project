import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appPickItem]',
})
export class PickItemDirective {
	constructor(private element: ElementRef, private renderer: Renderer2) {}

	@HostListener('mouseenter') onMouseEnter(): void {
		this.setStyle('scale(1.03)');
	}

	@HostListener('mouseleave') onMouseLeave(): void {
		this.setStyle('scale(1)');
	}

	private setStyle(val: string): void {
		this.renderer.setStyle(this.element.nativeElement, 'transform', val);
	}
}
