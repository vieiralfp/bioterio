import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  constructor(public toastController: ToastController) { }

  public async presentToastColor(texto, cor: string ) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 1200,
      position: 'top',
      translucent: true,
      color: cor
    });
    toast.present();
  }


  ngOnInit() {
  }

}
