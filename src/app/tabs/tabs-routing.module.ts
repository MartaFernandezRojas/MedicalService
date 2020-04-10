import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',

    component: TabsPage,
    children: [
      {
        path: 'users',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../users/users.module').then(m => m.usersPageModule)

          }
        ]
      },
      {
        path: 'viewUser',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../viewUser/viewUser.module').then(m => m.viewUserPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/users',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
