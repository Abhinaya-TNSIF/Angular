import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';


@Directive({
  selector: '[appTextColor]'  // The directive will be applied using this attribute
})
export class TextColorDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // This will be triggered when the user hovers over the element
  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('blue');  // Change text color to blue on hover
  }

  // This will be triggered when the user stops hovering over the element
  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('black');  // Reset text color to black when hover ends
  }

  // Helper method to change the color
  private changeColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}

