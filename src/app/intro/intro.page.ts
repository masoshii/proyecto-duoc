import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {

  constructor(private router: Router) { }
  ngOnInit() {}

  goToLogin() {
    localStorage.setItem('introShown', 'true'); 
    this.router.navigate(['/login']); 
  }
}
