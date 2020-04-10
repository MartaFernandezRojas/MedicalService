import { Component } from '@angular/core';
import { MedicalService } from '../medical.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: 'users.page.html',
  styleUrls: ['users.page.scss']
})
export class usersPage {
  public users:any;

  constructor(private medicalService: MedicalService,private router: Router) { }
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.medicalService.getUser().subscribe(response => {
      this.users=response
    })
  }
  showUser(id) {
    this.medicalService.putId(id)
    this.router.navigateByUrl('/tabs/viewUser');
  }

  ionViewWillEnter(){

  }

}
