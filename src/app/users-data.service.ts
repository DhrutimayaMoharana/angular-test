import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http:HttpClient) {  }
  getData(){
    return {
      name : 'Dhruti',
      age : 23,
      code : 'RST005'
    }
  }

  getCompanyData(){
    let url="https://jsonplaceholder.typicode.com/todos/";
    return this.http.get(url);
  }
}
