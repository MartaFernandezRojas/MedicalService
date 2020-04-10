import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MedicalService {
  public userId: any
  private url:string
  constructor(private http: HttpClient) {
    this.url='https://jsonplaceholder.typicode.com'
   }

  //get list of patients
  getUser() {
    return this.http.get(this.url+'/users');
  }
  //save and get id of patient select
  putId(id) {
    this.userId = id;
    localStorage.setItem('userId', id)
  }
  getId() {
    return this.userId;
  }

  //get detail of patients
  showUser() {
    if(this.userId==undefined){
      this.userId=localStorage.getItem('userId')
    }
    return this.http.get(this.url+'/users/' + this.userId);
  }

  //get information about medicines 
  getInfoMedic() {
    if(this.userId==undefined){
      this.userId=localStorage.getItem('userId')
    }
    return this.http.get(this.url+'/posts?userId=' + this.userId);
  }
}
