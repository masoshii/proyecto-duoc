import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; 
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  identifier: string = '';
  password: string = '';
  passwordType: string = 'password';
  
  private validIdentifiers = ['profe-javier','18566842-8',]; 

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private alertController: AlertController
  ) { }
  
  ngOnInit() {
  }

  loginPage() {
    if (!this.identifier) {
      this.presentAlert('El campo de usuario no puede estar vacío.');
      return;
    }
    
    if (!this.password) {
      this.presentAlert('El campo de contraseña no puede estar vacío.');
      return;
    }

    if (this.password.length < 6) {
      this.presentAlert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (!this.isValidIdentifier(this.identifier)) {
      this.presentAlert('Usuario incorrecto.');
      return;
    }

    if (this.password !== '123456') {
      this.presentAlert('Contraseña incorrecta.');
      return;
    }

    this.router.navigate(['/tabs']);
  }

  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  
  isValidIdentifier(identifier: string): boolean {
    if (this.validIdentifiers.includes(identifier)) {
      return true;
    }

    
    const rutPattern = /^\d{1,2}\.\d{3}\.\d{3}-[\dkK]$/; 
    const passportPattern = /^[A-Z0-9]{6,9}$/; 
    
   
    if (rutPattern.test(identifier) || passportPattern.test(identifier)) {
      return true;
    }

    return false;
  }

  goToRegister() {
    this.navCtrl.navigateForward('/signup');

    
  }
 
  
  goToRecovery() {
    this.navCtrl.navigateForward('/recovery');

    
  }
 
}

