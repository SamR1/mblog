import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthService } from '../../../services/auth.service';
import { FormatDatePipe } from '../../../pipes/format-date.pipe';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [FormatDatePipe]
})
export class ProfileComponent implements OnInit {

  user = null;

  constructor(private http: Http, private authService: AuthService) { }

  ngOnInit() {
      const apiUrl = 'http://localhost:3000/api/profile';
      const headers = new Headers();
      headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
      this.http.get(apiUrl, {headers: headers}).subscribe(
          res => {
              this.user = res.json();
          },
          err => console.log(err));
  }

}
