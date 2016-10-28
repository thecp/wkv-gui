import { Routes, RouterModule }  from '@angular/router';

import { CompetitionListComponent } from './competition-list.component';

const routes: Routes = [
  {
    path: '',
    component: CompetitionListComponent,
  }
];

export const routing = RouterModule.forChild(routes);
