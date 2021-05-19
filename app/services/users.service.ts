import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import { User, Users } from '../model/users';
@Injectable()
export class UserService {
API_URL = 'https://jsonplaceholder.typicode.com';
constructor(protected http: HttpClient) {
  }

   getUsers() {
     return this.http.get<Users>(this.API_URL);
   }
}