import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgFor } from '@angular/common'; // import ngif and ngfor

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    NgIf , // for the imports array
    NgFor // for the imports array
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Directive Demo';
  isLoggedIn: boolean = true; // for *ngIf
  users = [ // for *ngFor
    { name: 'Abhi', role: 'trainer'},
    { name: 'Bob', role: 'Admin'}
  ];

  toggleLogin(): void {
    this.isLoggedIn = !this.isLoggedIn;
  }

}
