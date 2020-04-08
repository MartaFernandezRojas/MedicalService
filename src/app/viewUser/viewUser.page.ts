import { Component } from '@angular/core';
import { MedicalService } from '../medical.service';

@Component({
  selector: 'app-viewUser',
  templateUrl: 'viewUser.page.html',
  styleUrls: ['viewUser.page.scss']
})
export class viewUserPage {
  public IdUser: number;
  userInfo:any;
  medication:any;
  constructor(private medicalService: MedicalService) { }

  ngOnInit() {
    this.IdUser = this.medicalService.getId();
    this.showDetailsUser();
    this.getGenericMedication();
  }
  showDetailsUser() {
    this.medicalService.showUser(this.IdUser).subscribe(
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

}
