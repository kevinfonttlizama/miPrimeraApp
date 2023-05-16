import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {


    nombre="Kevin";

    apellido="Fontt";

    edad=2;

    /* empresa="Amazon"; */

    habilitacionCuadro=false

    usuRegistrado=true

    getRegistroUsuario() {
      this.usuRegistrado=false
    }

}
