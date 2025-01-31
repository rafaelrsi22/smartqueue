import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import removeStringSpaces from '../../utils/removeStringSpaces';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    console.log("login component");
  }

  onSubmit(): void {
    if (
      removeStringSpaces(this.username) === "" || 
      removeStringSpaces(this.password) === ""
    ) {
      console.log("invalid input!");
      return;
    }

    this.loginService.login(this.username, this.password).subscribe((data) => {
      console.log(data);
    });
  }
}
