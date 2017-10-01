import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error = null;

  constructor(private http: Http, private router: Router, private authService: AuthService) { }

  ngOnInit() {
      if (this.authService.user !== null) {
          this.router.navigateByUrl('/');
      }
  }

  login(email, password) {
      const apiUrl = 'http://localhost:3000/api/login';
      this.http.post(apiUrl, {email: email, password: password}).subscribe(
          res => {
              this.authService.saveToken(res.json().token);
              this.router.navigateByUrl('/');
          },
          err => {
              console.log(err);
              this.error = err.json().message;
          });
  }

}
