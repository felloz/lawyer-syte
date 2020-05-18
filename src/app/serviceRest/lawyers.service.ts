import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LawyersService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    let Url = 'http://localhost:8000/lawyers/';
    return this.http.get<any>(Url);
  }
}
