import {Directive, ElementRef, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnChanges {
  @Input('appColor') color = 'blue';

  constructor(private el: ElementRef) { }

  ngOnChanges(): void {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

}
