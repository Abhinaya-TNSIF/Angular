import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Input, Output, EventEmitter } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  isFavorite: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class ProductDetailComponent {
  @Input() product: Product; //input data from our parent (component)
  @Output() toggleFavorite = new EventEmitter<number>();

  onToggleFavorite(): void {
    this.toggleFavorite.emit(this.product.id);
  }
}

export class AppComponent {
  products: Product[] = [
    {id: 1, name: 'Laptop'; price:1200. isFavorite: false},
  ]
}

