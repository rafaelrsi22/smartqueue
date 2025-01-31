import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}
  
  login(username: string, password: string) {
    return this.http.post(`http://localhost:3000/auth`, {username, password}, {withCredentials: true});
  }
}
