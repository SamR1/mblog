import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: Http, private router: Router, private authService: AuthService) { }

  ngOnInit() { }

  login(email, password) {
      const apiUrl = 'http://localhost:3000/api/login';
      this.http.post(apiUrl, {email: email, password: password}).subscribe(
          res => {
              this.authService.saveToken(res.json().token);
              this.router.navigateByUrl('/');
          },
          err => console.log(err));
  }

}
