import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-clases",
  templateUrl: "./clases.component.html",
  styles: []
})
export class ClasesComponent implements OnInit {
  alerta = "alert-danger";
  loading = true;

  propiedades: object = {
    danger: false
  };

  constructor() {}

  ngOnInit() {}

  ejecutar() {
    this.loading = false;

    setTimeout(() => {
      this.loading = true;
    }, 2000);
  }
}
