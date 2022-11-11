import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    url="http://172.25.140.132:8080/ATMDevPortal/"
  constructor(private http: HttpClient) { }

  get_data()
  {
    return this.http.get(this.url + 'htd/save');
  }
}
