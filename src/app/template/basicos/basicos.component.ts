import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  /**
   * @ViewChild:
   * Puedo obtener la informacion del formulario, 
   * solo agregando el nombre de la referencia del formulario.
   * (!) confiia en mi , siempre vas a tener un valor
   */
  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls.producto?.invalid 
            && this.miFormulario?.controls.producto?.touched
  }

  precioValido(): boolean{
    return this.miFormulario?.controls.precio?.touched &&
            this.miFormulario?.controls.precio?.value < 0
  }

  /**utilizamos el @viewChild por eso es que ya cometamos la referencia y borramos la referencia en el html*/
  // guardar(miFormulario: NgForm) 

  guardar(){
    console.log(this.miFormulario);
  }

}
