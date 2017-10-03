import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from '../../../services/auth.service';
import { PostsService } from '../../../services/posts.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    postForm: FormGroup;
    posts = null;
    error = null;
    apiUrl = 'http://localhost:3000/api/posts/';

    constructor(private formBuilder: FormBuilder,
                private http: Http,
                private authService: AuthService,
                private postsService: PostsService) { }

    ngOnInit() {
        this.postForm = this.formBuilder.group({
            message: ''
        });
        this.getPosts();
    }

    sendPost(postForm) {
        this.error = null;

        const headers = new Headers();
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

        this.http.put(this.apiUrl, postForm, {headers: headers}).subscribe(
            res => {
                this.getPosts();
                this.postForm.reset();
            },
            err => {
                this.error = err.json().message;
            });
    }

    getPosts() {
        this.postsService.getPosts().subscribe(
            res => {
                if (res.status === 200) {
                    this.posts = res.json();
                }
            },
            err => {
                this.error = err.message;
            });
    }

    delete(id) {
        this.postsService.deletePost(id).subscribe(
            res => {
                if (res.status === 200) {
                    this.getPosts();
                }
            },
            err => {
                console.log(err.message);
            });
    }

}
