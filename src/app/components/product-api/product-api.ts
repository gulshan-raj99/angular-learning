import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product, ProductsService } from '../../services/products-service';

@Component({
  selector: 'app-product-api',
  imports: [CommonModule,FormsModule],
  templateUrl: './product-api.html',
  styleUrl: './product-api.css'
})
export class ProductApi {

  products: Product[] = [];
  selectedProduct: Product | null = null;
  newProduct: Product = {title:'',description: '', price: 0};

  limit = 10;
  skip = 0;
  total = 0;
  searchTerm = '';

  constructor(private productService:ProductsService){}

  ngOnInit() {
    this.fetchProducts();
  }

  // Get all products
  fetchProducts() {
    this.productService.getProducts(this.limit,this.skip,this.searchTerm).subscribe((res: any) => {
      this.products = res.products;
      this.total = res.total;
    });
  }

  onSearch() {
    this.skip = 0;
    this.fetchProducts();
  }

  nextPage() {
    if(this.skip + this.limit < this.total) {
      this.skip += this.limit;
      this.fetchProducts();
    }
  }

  previousPage() {
    if(this.skip>=0) {
      this.skip -= this.limit;
      this.fetchProducts();
    }
  }

  addProduct() {
    if(!this.newProduct.title || !this.newProduct.description) {
      alert('Please enter valid product details.');
      return;
    }
    this.productService.addProduct(this.newProduct).subscribe(res => {
      alert('Product added successfully!');
      this.fetchProducts();
      this.newProduct = {title: '',description: '',price: 0};
    });
  }

 updateProduct(product: Product) {
    const updatedData = { ...product, title: product.title + ' (Updated)' };
    this.productService.updateProduct(product.id!, updatedData).subscribe(() => {
      alert('Product updated!');
      this.fetchProducts();
    });
  }

  deleteProduct(id: number){
    if(confirm('Are you sure to delete this product?')){
      this.productService.deleteProduct(id).subscribe(() => {
        alert('Product deleted successfully!');
        this.fetchProducts();
      });
    }
  }

  }

