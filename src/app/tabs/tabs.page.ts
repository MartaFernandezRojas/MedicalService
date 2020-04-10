import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private router: Router) { }

  navigate(action) {
    if (action === 'users') {
      this.router.navigateByUrl('/tabs/users');
    } else if (action === 'details') {
      this.router.navigateByUrl('/tabs/viewUser');
    }
  }

}
