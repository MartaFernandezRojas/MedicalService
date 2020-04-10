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
    return this.http.get('http://hapi.fhir.org/baseR4/Patient?_pretty=true');
  }
  //save and get id of patient select
  putId(id) {
    this.userId = id;
  }
  getId(){
    return  this.userId;
  }

  //get detail of patients
  showUser(id) {
    console.log('id',id)
    return this.http.get('http://hapi.fhir.org/baseR4/Patient/' + id + '?_pretty=true');
  }

  //get information about medicines 
  getInfoMedic(){
    return this.http.get('http://hapi.fhir.org/baseR4/MedicationRequest/' + '1095605' + '?_pretty=true');
  }
}
