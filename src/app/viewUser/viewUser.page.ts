import { Component } from '@angular/core';
import { MedicalService } from '../medical.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-viewUser',
  templateUrl: 'viewUser.page.html',
  styleUrls: ['viewUser.page.scss']
})
export class viewUserPage {
  public IdUser: number;
  userInfo:any;
  medication:any;
  constructor(private medicalService: MedicalService,private router: Router) { }

  ngOnInit() {
    this.showDetailsUser();
    this.getGenericMedication();
   
  }
  showDetailsUser() {
    this.medicalService.showUser().subscribe(
      response => {
        this.userInfo=response
        console.log(this.userInfo)
      })
  }
  getGenericMedication() {
    this.medicalService.getInfoMedic().subscribe(response => {
      this.medication = response;

    })
  }
  //solve refresh problem
  ionViewWillEnter(){
    this.showDetailsUser();
    this.getGenericMedication();
  }

}
