import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejeventbinding',
  templateUrl: './ejeventbinding.component.html',
  styleUrls: ['./ejeventbinding.component.css']
})
export class EjeventbindingComponent implements OnInit {

  texto = 'Originalmente el texto se carga asi';

  modTexto() {
    this.texto = 'Al pulsar el boton el texto se muestra asi';
  }
  constructor() { }

  ngOnInit() {
  }

}
