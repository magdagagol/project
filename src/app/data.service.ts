import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from './data'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:3000/data"

  getData():Observable<Data[]>{
    return this.http.get<Data[]>(this.url)
  }
}
