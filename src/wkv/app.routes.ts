import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main';
import { HomeComponent } from './home';
import { LoginComponent } from './login';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'pages',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'club',
        loadChildren: () => System.import('./club/club.module')
      },
      {
        path: 'athlete',
        loadChildren: () => System.import('./athlete/athlete.module')
      },
      {
        path: 'competition',
        loadChildren: () => System.import('./competition/competition.module')
      },
      {
        path: 'competition-list',
        loadChildren: () => System.import('./competition-list/competition-list.module')
      },
      {
        path: '**',
        component: LoginComponent
      }
    ]
  },
  {
    path: '**',
    component: LoginComponent
  },
];

export const routing = RouterModule.forRoot(ROUTES, { useHash: true });
