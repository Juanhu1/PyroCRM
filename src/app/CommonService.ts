import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Headers, RequestOptions } from '@angular/http' ;

import {Observable } from 'rxjs/Observable' ;
import 'rxjs/add/operator/map' ;
import 'rxjs/add/operator/do' ;
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http: Http) { }
  saveUser(user) {    
    return this.http.post('http://localhost:3000/api/SaveUser/', user)
      .map((response: Response) => response.json());
  }
  getUser() {
    return this.http.get('http://localhost:3000/api/getuser/')
      .map((response: Response) => response.json());
  }
}