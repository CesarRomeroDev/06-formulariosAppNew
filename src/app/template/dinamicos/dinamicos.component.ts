import { Component, OnInit } from '@angular/core';

interface Persona{
  nombre: string;
  favoritos: Favorito[];
}
interface Favorito{
  id: number;
  nombre: string;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Julio',
    favoritos: [
      { id: 1, nombre: 'Metal Gear' },
      { id: 2, nombre: 'DeathStranding' }
    ]
  }

  agregarJuego(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({ ...nuevoFavorito });
    this.nuevoJuego = '';
  }

  eliminar( index: number ){
    this.persona.favoritos.splice(index, 1);
  }




  constructor() { }

  ngOnInit(): void {
  }

  guardar(){

  }

}
