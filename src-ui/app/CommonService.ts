import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Headers, RequestOptions } from '@angular/http' ;

import {Observable } from 'rxjs/Observable' ;
import 'rxjs/add/operator/map' ;
import 'rxjs/add/operator/do' ;

const PORT=8712 ;

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  constructor(private http: Http) { }
  saveUser(user) {    
    return this.http.post('http://localhost:'+PORT+'/api/SaveUser/', user)
      .map((response: Response) => response.json());
  }
  getUser() {
    return this.http.get('http://localhost:'+PORT+'/api/customers/getUser/')
      .map((response: Response) => response.json());
  }
}