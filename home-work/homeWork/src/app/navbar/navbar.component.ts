import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  // public user: any = localStorage.getItem('currentUser');
  // public isLogin: boolean = false;



  // ngOnInit() {
  //   if (this.user) {
  //     this.isLogin = true;
  //     console.log(this.user)



  //   } else {
  //     this.isLogin = false;

  //   }


  // }



  isLoggedIn(): boolean {

    const userData = localStorage.getItem('newUser');

    if (userData) {
      return true;
    } else {
      return false;
    }
  }



  //  Example logout function

  logout() {
    console.log("Logging out...");

    // Remove user data from local storage
    localStorage.removeItem('newUser');

  }





  // public isLoggedIn: Boolean = true;
  // public users: any = JSON.parse(localStorage.getItem('keydata')!) || [];

  // ngOnInit() {

  //   if (this.users == null) {
  //     this.isLoggedIn == false
  //     // console.log(this.isLoggedIn);

  //   } else {
  //     this.isLoggedIn = true

  //   }

  //   //  localStorage.setItem("data", JSON.stringify('keydata'))
  // }








}
