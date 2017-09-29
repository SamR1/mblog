import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: Http, private router: Router) { }

  ngOnInit() { }

  login(email, password) {
      const apiUrl = 'http://localhost:3000/api/login';
      this.http.post(apiUrl, {email: email, password: password}).subscribe(
          res => {
              localStorage.setItem('token', res.json().token);
              this.router.navigateByUrl('/');
          },
          err => console.log(err));
  }

}
