import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ToastController } from '@ionic/angular';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private router: Router, private data: DataService, private toastController: ToastController) { }

  async login() {
    try {
      // Dummy-Überprüfung, ersetze durch echte Authentifizierung
      if (this.username === 'example' && this.password === 'pass') {
        // Erfolgreicher Login, weiterleiten zu einer anderen Seite
        this.router.navigate(['/tabs/home']);
      } else {
        const toast = await this.toastController.create({
          message: 'Falscher Benutzername oder Passwort',
          duration: 3000,
          position: 'bottom',
        });
        toast.present();
      }
    } catch (error) {
      console.error('Fehler bei der Anmeldung', error);
      const toast = await this.toastController.create({
        message: 'Fehler bei der Anmeldung. Bitte versuche es erneut.',
        duration: 3000,
        position: 'bottom',
      });
      toast.present();
    }
  }

  navigateToRegister(){
    this.router.navigate(['register']);
  }

  ngOnInit() {
  }

}
