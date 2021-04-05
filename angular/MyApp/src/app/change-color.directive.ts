import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  @Input() color:string;
  @HostBinding ('style.border') hostborder:string;
  constructor(private el:ElementRef,private renderer: Renderer2) { }

  
  changeBgcolor(color:string){
    this.renderer.setStyle(this.el.nativeElement,'color',color);
  }

  @HostListener ('click') foo(){
    alert('hello');
  }

  @HostListener ('mouseenter') abc(){
    this.changeBgcolor(this.color);
    this.hostborder='5px solid tomato';
  }

  
  @HostListener ('mouseleave') xyz(){
    this.changeBgcolor('black');
    this.hostborder='';
  }
}
