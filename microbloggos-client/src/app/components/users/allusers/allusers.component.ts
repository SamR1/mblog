import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  users: any;
  error: string;

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {

      const headers = new Headers();
      headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
      const apiUrl = 'http://localhost:3000/api/users';
      this.http.get(apiUrl, {headers: headers}).subscribe(
          res => {
              // console.log(res.status );
              if (res.status === 200) {
                  this.users = res.json();
              }
          },
          err => {
              if (err.status === 401) {
                  this.error = 'You must be authenticated to access users list.';
              }
          });
  }

}
