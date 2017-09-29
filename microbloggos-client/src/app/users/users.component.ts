import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    users: any;
    message: string;

    constructor(private http: Http) { }

    ngOnInit() {

        console.log('user get');
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
                    this.message = 'You must be authenticated to access users list.';
                }
            });
    }
}
