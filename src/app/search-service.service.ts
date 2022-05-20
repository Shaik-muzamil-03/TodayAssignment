import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHandler } from '@angular/common/http';
import {  Observable } from 'rxjs';
import {Details} from './details';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  searchEndPoint:string = 'https://api.nationalize.io/?name'
  private http:HttpClient;

  constructor(http2:HttpClient) { 
    this.http = http2;
  
  }

  getDetails(name:string):Observable<Details>{
      return this.http.get<Details>(`${this.searchEndPoint+'='+name}`);
  }
}
