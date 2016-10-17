import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { ClubListComponent, ClubEditComponent } from './club';

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
