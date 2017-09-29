import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // user = null;

  constructor(private router: Router, private authService: AuthService) {
    // this.user = authService.user;
  }

  ngOnInit() {
  }

  logout() {
    this.authService.deleteToken();
    // console.log(this.user);
    console.log(this.authService.user);
    this.router.navigateByUrl('/');
    console.log('toto');
  }

}
