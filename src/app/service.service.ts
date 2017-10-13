import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ServiceService {

  constructor(private http: Http) { }

  getData() {
   // console.log('https://jsonplaceholder.typicode.com/users');
   
    return this.http.get('https://jsonplaceholder.typicode.com/users')
    .map(response => response.json())
    .map(res => res)
  }

  getTodoList(userId:any) {
    return this.http.get('https://jsonplaceholder.typicode.com/todos?userId='+userId)
    .map(response => response.json())
    .map(res => res)
  }

  updateTodoList(todoID:any) {
      return this.http.put('https://jsonplaceholder.typicode.com/todos',todoID)
      .map(response => response.json())
      .map(res => res)
    }
  
    deleteTodoList(todoID:any) {
      return this.http.delete('https://jsonplaceholder.typicode.com/todos/'+todoID)
      .map(response => response.json())
      .map(res => res)
    }

  
}
