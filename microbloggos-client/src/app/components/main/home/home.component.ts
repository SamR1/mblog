import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    postForm: FormGroup;
    error = null;
    message = null;
    apiUrl = 'http://localhost:3000/api/posts/';

    constructor(private formBuilder: FormBuilder, private http: Http, private authService: AuthService) { }

    ngOnInit() {
        this.postForm = this.formBuilder.group({
            message: ''
        });
    }

    sendPost(postForm) {
        this.error = null;
        this.message = null;

        const headers = new Headers();
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

        this.http.put(this.apiUrl, postForm, {headers: headers}).subscribe(
            res => {
                this.message = res.json().message;
            },
            err => {
                this.error = err.json().message;
            });
    }

    getPosts() {
      console.log('posts');
    }
}
