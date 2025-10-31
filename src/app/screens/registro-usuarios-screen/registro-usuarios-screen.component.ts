import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-usuarios-screen',
  templateUrl: './registro-usuarios-screen.component.html',
  styleUrls: ['./registro-usuarios-screen.component.scss']
})
export class RegistroUsuariosScreenComponent {
  hide = true; //lo de la contraseña

  //Selector de edades del registro
  edades = Array.from({ length: 83 }, (_, i) => i + 18);

  onRegister() {
    console.log('submit registro');
  }
}
