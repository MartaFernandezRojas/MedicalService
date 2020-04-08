import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MedicalService {

  constructor(private http: HttpClient) { }
  
  getUser() {
    return this.http.get('http://hapi.fhir.org/baseR4/Patient?_pretty=true');
  }

}
