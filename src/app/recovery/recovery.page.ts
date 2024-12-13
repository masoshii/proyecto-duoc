import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.page.html',
  styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage {
  email: string = '';

  constructor(
    private alertController: AlertController,
    private navCtrl: NavController  
  ) {}

  async recoverPassword() {
    if (!this.email) {
      this.presentAlert('Por favor, ingresa tu correo electrónico.');
      return;
    }

    if (!this.isValidEmail(this.email)) {
      this.presentAlert('El correo electrónico ingresado no es válido. Por favor intenta nuevamente.');
      return;
    }

    
    console.log(`Correo enviado a: ${this.email}`);
    this.presentAlert('Se ha enviado un correo de recuperación a tu dirección de email.');

    this.navCtrl.navigateBack('/login');
  }

  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }



  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Recuperación de Contraseña',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
