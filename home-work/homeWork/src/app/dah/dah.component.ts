import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dah',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './dah.component.html',
  styleUrl: './dah.component.css'
})
export class DahComponent {

  public username: string | null = '';

  ngOnInit() {

    this.username = localStorage.getItem('newUser')
  }
}


