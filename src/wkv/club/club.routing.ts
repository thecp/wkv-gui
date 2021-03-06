import { Routes, RouterModule }  from '@angular/router';

import { ClubListComponent } from './club-list.component';
import { ClubEditComponent } from './club-edit.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ClubListComponent,
      },
      {
        path: 'edit/:id',
        component: ClubEditComponent
      }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
