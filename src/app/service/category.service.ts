import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../interface/category';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiURL = "http://localhost:8000/njsapi/category";

  constructor( private http: HttpClient) { }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.apiURL}`);
  };

  deleteCategory(category: Category): Observable<Category> {
    
    const URL = `${this.apiURL}/${category._id}`;
    return this.http.delete<Category>(URL);
  };

  updateCategory(category: Category): Observable<Category>{
    
    let body = {
      "header": {
        "clientid": "6063e466b90d650f20fffc16",
        "clientCode": "rone",
        "modIp": "96.88.32.146",
        "module": "QMS",
        "role": "client_admin",
        "user": "admin_rone",
        "userid": "60639a3a86feb514a4d07f75"
      },
        "body":category
    };
    console.log(category)
    console.log(body)
    const URL = `${this.apiURL}/${category._id}`;
    return this.http.put<Category>(URL, body, httpOptions);
  };

  addCategory(category: Category): Observable<Category>{
    let body = {
      "header": {
        "clientid": "6063e466b90d650f20fffc16",
        "clientCode": "rone",
        "modIp": "96.88.32.146",
        "module": "QMS",
        "role": "client_admin",
        "user": "admin_rone",
        "userid": "60639a3a86feb514a4d07f75"
      },
        "body":category
    };
    console.log(category)
    console.log(body)
    return this.http.post<Category>(this.apiURL, body, httpOptions)
  }; 

};
