import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) { };

  public username: string = '';
  public email: string = '';
  public phone: any = '';
  public password: any = '';
  // public alluser: any = JSON.parse(localStorage.getItem("keydata")!) || [];
  public alluser: any = []


  Create() {
    let data = {

      username: this.username,
      email: this.email,
      phone: this.phone,
      password: this.password,



    };

    this.alluser.push(data)
    localStorage.setItem("keydata", JSON.stringify(this.alluser));

    console.log(data);

    this.router.navigate(['login'])



  }



}
