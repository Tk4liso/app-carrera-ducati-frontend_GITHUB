import { Component } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent {
  hide = true; //lo de la contraseña

  onSubmit() {
    console.log('submit login');
  }
}
