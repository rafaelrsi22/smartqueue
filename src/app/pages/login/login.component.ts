import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import removeStringSpaces from '../../utils/removeStringSpaces';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

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
  }
}
