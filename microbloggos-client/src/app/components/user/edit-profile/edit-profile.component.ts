import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  userForm: FormGroup;
  message = null;

  constructor(private formBuilder: FormBuilder, private http: Http, private authService: AuthService) { }

  ngOnInit() {
      this.userForm = this.formBuilder.group({
          username: '',
          email: '',
          password: '',
          password_conf: ''
      });
      const apiUrl = 'http://localhost:3000/api/profile';
      const headers = new Headers();
      headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
      this.http.get(apiUrl, {headers: headers}).subscribe(
          res => {
              this.userForm = this.formBuilder.group({
                  username: res.json().username,
                  email: res.json().email,
                  password: '',
                  password_conf: ''
              });
          },
          err => {
              if (err.status === 401) {
                  this.message = 'Unauthorized access';
              } else {
                  this.message = 'Error in fetching profile data';
              }
          });

  }

  updateProfile() {
    console.log('update');
  }

}
