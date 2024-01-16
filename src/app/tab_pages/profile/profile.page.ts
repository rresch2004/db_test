import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router) { }

  goToSettingsPage() {
    this.router.navigate(['/settings']);
  }
  level = 2;
  learninglevel(level: number): string {
    if (level <= 3) {
      return 'Zauberlehrling';
    }
    if (level <= 6) {
      return 'kleiner Zaubermeister';
    }
    if (level > 6) {
      return 'großer Zaubermeister';
    }
    return 'Fehler';
  }

  ngOnInit() {
  }

}
