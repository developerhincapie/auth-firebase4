import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ApiServicerovider {

  public PATH_URL = 'https://jsonplaceholder.typicode.com/posts/';


  constructor(public http: HttpClient) { }

  getAllData() {
    return this.http.get(`${this.PATH_URL}`);
  }

  getDataxId(id) {
    return this.http.get(`${this.PATH_URL}${id}`);
  }

}
