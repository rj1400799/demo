// src/app/inventory/inventory.component.ts
import { CommonModule, CurrencyPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppDialogComponent } from '../app-dialog/app-dialog.component';

// src/app/product.model.ts
export interface Product {
  id: number;            // Unique identifier for the product
  name: string;          // Name of the product
  price: number;         // Price of the product
  description: string;   // Description of the product
  category: string;      // Category of the product (e.g., 'home', 'books', 'electronics', 'sports')
}


@Component({
  selector: 'app-inventory',
  standalone: true,
  templateUrl: './app-inventory.component.html',
  styleUrls: ['./app-inventory.component.css'],
  imports:[CurrencyPipe, NgFor, CommonModule]
})
export class InventoryComponent implements OnInit {
  products = [
    { id: 1, name: 'Laptop', price: 999.99, description: 'A powerful laptop', category: 'electronics' },
    { id: 2, name: 'Book', price: 19.99, description: 'An interesting book', category: 'books' }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    // Load products from a service or API if necessary
  }

  openEditDialog(product: Product ): void {
    const dialogRef = this.dialog.open(AppDialogComponent, {
      width: '400px',
      data: product
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.products.findIndex(p => p.id === result.id);
        if (index !== -1) {
          this.products[index] = result;
        }
      }
    });
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
    console.log('Deleted product with id:', id);
  }
}
