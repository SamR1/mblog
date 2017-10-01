import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error = null;

  constructor(private http: Http, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.user !== null) {
       this.router.navigateByUrl('/');
    }
  }

  register(username, email, password, password_conf) {
      const apiUrl = 'http://localhost:3000/api/register';
      this.http.post(apiUrl, {username: username, email: email, password: password, password_conf: password_conf})
          .subscribe(
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
