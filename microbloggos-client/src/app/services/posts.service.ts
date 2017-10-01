import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class PostsService {

  apiUrl = 'http://localhost:3000/api/posts/';

  constructor(private http: Http) { }

  getPosts() {
      const headers = new Headers();
      headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
      return this.http.get(this.apiUrl, {headers: headers});
  }

}
