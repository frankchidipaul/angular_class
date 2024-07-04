import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(public http: HttpClient) { }
  public fetchTodo() {

    return this.http.get('https://dummyjson.com/todos');
  }


  public oneTodo(id: any) {

    return this.http.get(`https://dummyjson.com/todos/${id}`)
  }
}
