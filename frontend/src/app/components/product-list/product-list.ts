import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {
  products: Product[] = [];
  loading = true;
  error: string | null = null;
  searchTerm = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.loading = true;
    this.error = null;
    this.productService.getProducts().subscribe({
      next: (data) => { this.products = data; this.loading = false; },
      error: (err) => {
        this.error = err.status === 401 ? 'Please log in to view products.' : 'Failed to load products.';
        this.loading = false;
      }
    });
  }

  deleteProduct(id: number | undefined) {
    if (!id || !confirm('Are you sure you want to delete this product?')) return;
    this.productService.deleteProduct(id).subscribe({
      next: () => { this.products = this.products.filter(p => p.id !== id); },
      error: () => alert('Could not delete product.')
    });
  }

  get filteredProducts() {
    if (!this.searchTerm.trim()) return this.products;
    return this.products.filter(p =>
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      p.description?.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onSearch(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }
}
