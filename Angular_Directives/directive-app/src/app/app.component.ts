import { Component } from '@angular/core';
import { TextColorDirective } from './text-color.directive';

@Component({
  selector: 'app-root',
  imports: [TextColorDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directive-app';
}
