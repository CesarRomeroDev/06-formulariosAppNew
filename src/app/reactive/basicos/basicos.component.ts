import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  /**para asociar al template, pero existe otra forma
   *  de hacerlo y es con el FormBuiler que es un servicio*/
  // miFormulario: FormGroup = new FormGroup({
  //   'nombre'     : new FormControl('RTX 4000ti'),
  //   'precio'     : new FormControl(1500),
  //   'existencias': new FormControl(5),
  // })

  /**
   * Esta es la otra forma de hacerlo miFormulario va ser de
   * tipo FormGroup igual a nuestro servicio de nombre fb y group
   * es parecido a FormControl y hacemos nuestro arreglo con los nombres
   * asociados al template.
   * Validators.required: validar y requerimiento del input y lo cual
   * va ser un arreglo de validadores sincronos
   * Validators.minLength(3): Requiere 3 string para ser true
   * Validators.required, Validators.min(0): valor requerido y minimo debe de ser mayor a cero
   */
  miFormulario: FormGroup = this.fb.group({
    nombre: [ ,[ Validators.required, Validators.minLength(3)] ],
    precio: [ , [Validators.required, Validators.min(0)] ],
    existencias: [ , [Validators.required, Validators.min(0)] ],
  })

  constructor(
    private fb: FormBuilder //servicio
  ) { }

  //inicializar el formulario con información o valor
  ngOnInit() {
    this.miFormulario.reset({
      nombre: 'RTX 4080ti',
      precio: 1600,
      existencias: 10
    })
  }

  campoEsValido( campo: string ) {
    return this.miFormulario.controls[campo].errors
            && this.miFormulario.controls[campo].touched;
  }

  guardar(){
    //markAllAsTouched() si los campos fueron tocados todos
    if( this.miFormulario.invalid ){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset()  //limpiar mi formulario despues de enviar datos

  }

}
