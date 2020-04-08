import { Component } from '@angular/core';
import { MedicalService } from '../medical.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private medicalService: MedicalService) {}
  ngOnInit(){
    this.medicalService.getUser().subscribe(response => { 
      console.log('response',response)
    })
  }

}
