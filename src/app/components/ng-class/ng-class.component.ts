import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styles: []
})
export class NgClassComponent implements OnInit {
  alerta: string = 'alert-danger';
  propiedades: object = {
    danger: false,

  };
  constructor() { }

  ngOnInit() {
  }

}
