import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(
    private _er: ElementRef
  ) {
    console.log('en una directiva');
  }
  @Input('appResaltado') color: string;

  @HostListener('mouseenter') mouseEntro() {
    console.log(this.color);
    this.resaltar(this.color);
  }
  @HostListener('mouseleave') mouseSalio() {
    this.resaltar(null);
  }
  private resaltar(color: string = 'yellow') {
    console.log(color);
    this._er.nativeElement.style.backgroundColor = color;
  }
}
