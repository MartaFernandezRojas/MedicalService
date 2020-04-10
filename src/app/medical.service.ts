import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MedicalService {

  constructor(private http: HttpClient) { }
  public userId: any

  //get list of patients
  getUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  //save and get id of patient select
  putId(id) {
    this.userId = id;
  }
  getId() {
    return this.userId;
  }

  //get detail of patients
  showUser(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id);
  }

  //get information about medicines 
  getInfoMedic(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId=' + id);
  }
}
