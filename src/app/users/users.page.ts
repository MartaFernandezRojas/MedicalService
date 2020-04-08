import { Component } from '@angular/core';
import { MedicalService } from '../medical.service';

@Component({
  selector: 'app-users',
  templateUrl: 'users.page.html',
  styleUrls: ['users.page.scss']
})
export class usersPage {
  public users:any;

  constructor(private medicalService: MedicalService) { }
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.medicalService.getUser().subscribe(response => {
      this.users=response
    })
  }

}
