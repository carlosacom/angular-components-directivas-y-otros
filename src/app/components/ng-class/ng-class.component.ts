import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styles: []
})
export class NgClassComponent implements OnInit {
  alerta: string = 'alert-danger';
  loading: boolean = false;
  propiedades: object = {
    danger: false,
  };

  constructor() { }

  ngOnInit() {
  }

  execute() {
    this.loading = true;
    setTimeout(() => this.loading = false, 1500);
  }
}
