import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService, Product } from '../../services/product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css'
})
export class ProductForm implements OnInit {
  productForm: FormGroup;
  isEditMode = false;
  productId?: number;
  loading = false;
  fetchingProduct = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      price: ['', [Validators.required, Validators.min(0)]],
      stock: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productId = Number(id);
      this.isEditMode = true;
      this.fetchingProduct = true;
      this.productService.getProduct(this.productId).subscribe({
        next: (product) => { this.productForm.patchValue(product); this.fetchingProduct = false; },
        error: () => { this.error = 'Could not load product details.'; this.fetchingProduct = false; }
      });
    }
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.loading = true;
      const productData: Product = this.productForm.value;
      const request$ = this.isEditMode
        ? this.productService.updateProduct(this.productId!, productData)
        : this.productService.createProduct(productData);

      request$.subscribe({
        next: () => this.router.navigate(['/products']),
        error: () => { this.error = `Failed to ${this.isEditMode ? 'update' : 'create'} product.`; this.loading = false; }
      });
    }
  }
}
