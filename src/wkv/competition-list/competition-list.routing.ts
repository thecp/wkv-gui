import { Routes, RouterModule }  from '@angular/router';

import { CompetitionListMainComponent } from './competition-list-main.component';

const routes: Routes = [
  {
    path: '',
    component: CompetitionListMainComponent
  }
];

export const routing = RouterModule.forChild(routes);
