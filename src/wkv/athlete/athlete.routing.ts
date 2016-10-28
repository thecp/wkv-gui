import { Routes, RouterModule }  from '@angular/router';

import { AthleteListComponent } from './athlete-list.component';
import { AthleteEditComponent } from './athlete-edit.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AthleteListComponent,
      },
      {
        path: 'edit/:id',
        component: AthleteEditComponent
      }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
