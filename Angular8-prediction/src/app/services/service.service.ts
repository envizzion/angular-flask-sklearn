import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:5002';
@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private http: HttpClient) { }

  saveData(data) {
    return this.http.post(`${baseUrl}/save`, data);
  }

  getPrediction(data) {
    return this.http.post(`${baseUrl}/predict`,data);
  }
}
