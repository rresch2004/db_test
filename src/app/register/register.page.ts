import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ToastController } from '@ionic/angular';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router, private data: DataService, private toastController: ToastController) 
  {
    this.username = '';
    this.email = '';
    this.password = '';
  }

  async register() {
    try {
      // Überprüfe, ob der Benutzer bereits existiert (Beispiel: Dummy-Überprüfung)
      if (!this.userExists(this.username)) {
        // Benutzerdatenbank erstellen
        const userDB = this.data.createUserDatabase(this.username);

        await userDB.info();
        
        // Beispiel: Benutzerdaten in die Datenbank einfügen
        await userDB.put({
          _id: 'user123',
          username: this.username,
          email: this.email,
          // Weitere Benutzerdaten hier hinzufügen
        });

        // Weiterleitung zu einer anderen Seite nach erfolgreicher Registrierung
        this.router.navigate(['/login']);
      } else {
        console.log('Benutzer existiert bereits');
        const toast = await this.toastController.create({
          message: 'Benutzer existiert bereits',
          duration: 3000, // Anzeigedauer in Millisekunden
          position: 'bottom', // Position der Toast-Meldung
        });
        toast.present();
      }
    } catch (error) {
      console.error('Fehler bei der Registrierung', error);
      const toast = await this.toastController.create({
        message: 'Fehler bei der Registrierung. Bitte versuche es erneut.',
        duration: 3000, // Anzeigedauer in Millisekunden
        position: 'bottom', // Position der Toast-Meldung
      });
      toast.present();
    }
  }

  private userExists(username: string): boolean {
    // Dummy-Überprüfung, du solltest dies durch eine echte Überprüfung ersetzen
    // Überprüfe, ob der Benutzer bereits in der Datenbank existiert
    return false;
  }

  navigateToLogin(){
    this.router.navigate(['login']);
  }

  ngOnInit() {
  }

}
