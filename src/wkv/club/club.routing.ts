import { Routes, RouterModule }  from '@angular/router';

import { ClubListComponent } from './club-list.component';
import { ClubEditComponent } from './club-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ClubListComponent,
    pathMatch: 'full',
    children: [
      {
        path: '/edit/:id',
        component: ClubEditComponent
      }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
