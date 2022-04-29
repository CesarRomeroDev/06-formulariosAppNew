/**las directivas nos ayudan a ser validaciones automaticas
 *  y modificar el formulario, cuando los valores no sean los correctos.
 * hay validaciones que solo son visuales, pero al momento de hacer el posteo(guardar)
 *  del formulario, esa informacion se sube al servidor con errores.
 * esta es una forma de validar la informacion y no dejar al cliente que mande informacion erronea. */
import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validators } from "@angular/forms";

/**
 * Solo se va a poder ocupar esta directiva si tiene el customMin 
 * y el ngModel
 */
@Directive({
   selector: '[customMin][ngModel]',
   providers: [{
       provide: NG_VALIDATORS,
       useExisting: CustomMinDirective,
       multi: true
   }]
})

/**
 * validators: 
 * para validar formularios que ya viene con angular para hacer validaciones
 */
export class CustomMinDirective implements Validators{

    /**
     * con @Input vamos a llamar a minimo que esta en el html en la seccion de existencias (siempre del padre)
     */
    @Input() minimo!: number;

    constructor(){
        console.log('Directiva', this.minimo);
    }

    validate( control: FormControl ){
        const inputValue = control.value;
        // console.log(inputValue);
        // console.log('minimo', this.minimo);
        return ( inputValue < this.minimo )
                ? { 'customMin': true }
                : null;
    }
}