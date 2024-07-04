import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public username: string = '';
  public password: any = '';
  public alluser: any = []
  constructor(private router: Router) {
    const storedusers = localStorage.getItem('keydata')
    this.alluser = storedusers ? JSON.parse(storedusers) : []
  }



  btn() {

    const data = {
      username: this.username,
      password: this.password
    };
    // console.log(this.alluser);

    const found = this.alluser.find((u: any) => u.username === data.username && u.password === data.password)

    if (found) {
      localStorage.setItem('newUser', JSON.stringify(found));

      this.router.navigate(['dah'])
      console.log(found);


    } else {

      alert('Invalid username or password');
    }

    const isLoginSuccessful = true;

    if (isLoginSuccessful) {

      localStorage.setItem('newUser', this.username);



    } else {
      alert('Login failed');
    }





  }




}
