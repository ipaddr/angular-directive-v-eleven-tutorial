import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor : string;
  @Input('appBetterHighlight') defaultColor: string = 'green';
  @Input() highLightColor: string = 'lightgreen';
  @Input() leaveColor: string = 'transparent';
  
  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseenter(){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
    // this.backgroundColor = 'green';
    this.backgroundColor = this.highLightColor;
  }

  @HostListener('mouseleave') mouseleave(){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.leaveColor;
  }

}
