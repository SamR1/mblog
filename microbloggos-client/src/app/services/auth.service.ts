import { Injectable } from '@angular/core';
import { User } from '../models/User';
import {isUndefined} from 'util';

@Injectable()
export class AuthService {

  user = null;

  constructor() {
    const token = localStorage.getItem('token');
    if (!isUndefined(token) && token !== null) {
      this.saveToken(localStorage.getItem('token'));
    }
  }

  saveToken(token) {
    localStorage.setItem('token', token);
    let payload = token.split('.')[1];
    payload = atob(payload);
    payload = JSON.parse(payload);
    this.user = new User;
    this.user._id = payload._id;
    this.user.email = payload.email;
    this.user.username = payload.username;
  }

  deleteToken() {
    localStorage.removeItem('token');
    this.user = null;
  }
}
