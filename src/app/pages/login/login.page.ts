import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ToastComponent } from 'src/app/components/toast/toast.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends ToastComponent {

  public login = '';
  public senha = '';

  submit() {
    this.auth.logar(this.login, this.senha).subscribe((data) => {
      if (data === true) {
        console.log('LoginPage', 'usuario logado');
      }
    },
    (error) => {
      console.log(error);
      this.presentToastColor('Não foi possível concetar. Verifique usuário e senha.', 'danger');
    },
    () => {
      this.senha = '';
    }
    );
  }

  constructor(private auth: AuthService,
              public toastController: ToastController) {
              super(toastController);
  }

}
