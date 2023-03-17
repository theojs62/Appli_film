import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCarteBordure]'
})
export class CarteBorderDirective {
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(null);
  }

  private setBorder(color: any) {
    const border = color ? 'solid 4px ' + color : null;
    this.el.nativeElement.style.border = border;
  }
}
