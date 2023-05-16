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

    usuRegistrado=false

    textoDeRegistro="No hay nadie registrado";


    getRegistroUsuario() {
      this.usuRegistrado=false;
    }

    setUsuarioRegistrado(event:Event) {
      
      // alert ("El usuario se registro correctamente");

      //this.textoDeRegistro="El usuario se registro correctamente"

      // alert(event.target)

      if((<HTMLInputElement>event.target).value=="si") {
        this.textoDeRegistro="El usuario se registro correctamente";
      }
      else {
        this.textoDeRegistro="No hay nadie registrado";
      }


    }



}
