import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username!: string;
  password!: string;
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  register() {
    this.http.post(`${this.apiUrl}/Auth/register`, {
      username: this.username,
      password: this.password
    }).subscribe({
      next: () => console.log("Registration successful"),
      error: (e) => console.error(e)
    });
  }
}
