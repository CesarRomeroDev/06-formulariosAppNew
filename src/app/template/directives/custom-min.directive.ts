import { Directive, Input } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

/**
 * Solo se va a poder ocupar esta directiva si tiene el customMin 
 * y el ngModel
 */
@Directive({
   selector: '[customMin][ngModel]' 
})

/**
 * validators: 
 * para validar formularios
 */
export class CustomMinDirective implements Validators{

    /**
     * con @Input vamos a llamar a minimo que esta en el html en la seccion de existencias
     */
    @Input() minimo!: number;

    constructor(){
        console.log('Directiva', this.minimo);
    }

    validate( control: FormControl ){
        const inputValue = control.value;
        console.log(inputValue);
    }
}