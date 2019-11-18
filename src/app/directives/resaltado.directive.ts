import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appResaltado]"
})
export class ResaltadoDirective {
  constructor(private el: ElementRef) {
    console.log("directiva llamada");
  }

  @Input("appResaltado") nuevoColor: string;

  @HostListener("mouseenter") mouseEntro() {
    console.log(this.nuevoColor);
    this.resaltar(this.nuevoColor || 'yellow');
  }
  @HostListener("mouseout") mouseSalio() {
    this.el.nativeElement.style.backgroundColor = null;
  }

  private resaltar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
