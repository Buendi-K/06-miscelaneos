import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  OnDestroy,
  AfterViewInit
} from "@angular/core";

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: "app-home",
  template: `
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <app-clases></app-clases>
    <p [appResaltado]="'green'">Hola Mundo</p>
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    AfterContentChecked {
  constructor() {}

  ngOnInit() {
    console.log("ngOnInit");
  }
  ngDoCheck() {
    console.log("ngDoCheck");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }
  ngOnChanges() {
    console.log("ngOnChanges");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}
