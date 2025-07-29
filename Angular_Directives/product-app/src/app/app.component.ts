import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root', // The selector used to identify this component in the HTML
  imports: [CommonModule], // Importing CommonModule to use common directives like ngIf and ngFor
  templateUrl: './app.component.html', // Link to the component's HTML template
  styleUrls: ['./app.component.css'] // Link to the component's CSS styles
})
export class AppComponent {
  // Define the title of the app, which will be displayed in the template
  title = 'PRODUCT APP';

  // Define the 'products' array with explicit typing, ensuring each product has a 'name' and 'price'
  products: { name: string, price: number }[] = []; // The products array is initially empty

  // This method adds some predefined products to the 'products' array
  addProducts() {
    // Static list of products added to the array when the method is called
    this.products = [
      { name: 'Laptop', price: 45000 },    // Product 1: Laptop with a price of 45000
      { name: 'Smartphone', price: 18000 }, // Product 2: Smartphone with a price of 18000
      { name: 'Tablet', price: 8000 },      // Product 3: Tablet with a price of 8000
    ];
  }
}

