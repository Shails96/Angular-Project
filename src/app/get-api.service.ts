import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Todo } from './models/Todo';

@Injectable({
  providedIn: 'root'
})
export class GetAPIService {

  constructor(
    private http: HttpClient
  ) { }

  apiCall ()
  {
    return new Promise((response, reject) => {
      this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe((data)=> response(data))
    })

  }
}
