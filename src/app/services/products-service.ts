import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Product {
  id?: number;
  title?: string;
  description?: string;
  price?: number;
  category?: string;
  thumbnail?: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private apiUrl = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) {}

  getProducts(limit: number, skip: number, searchTerm: string = ''): Observable<any> {
  let url = `${this.apiUrl}?limit=${limit}&skip=${skip}`;
  if (searchTerm) {
    url = `${this.apiUrl}/search?q=${searchTerm}&limit=${limit}&skip=${skip}`;
  }
  return this.http.get(url);
}

  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post(this.apiUrl + '/add', product);
  }

  updateProduct(id:number, product: Product): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  
}
