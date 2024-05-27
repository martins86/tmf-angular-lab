import { Routes } from '@angular/router';

export const LAYOUT_DEFAULT: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('@pages/authentication/login/login.routes').then(
        (m) => m.LOGIN_ROUTE,
      ),
  },
  {
    path: 'logout',
    loadChildren: () =>
      import('@pages/authentication/logout/logout.routes').then(
        (m) => m.LOGOUT_ROUTE,
      ),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('@pages/authentication/registration/registration.routes').then(
        (m) => m.REGISTRATION_ROUTE,
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('@pages/home/home.routes').then((m) => m.HOME_ROUTE),
  },
  {
    path: '**',
    loadChildren: () =>
      import('@pages/not-found/not-found.routes').then((m) => m.NOTFOUND_ROUTE),
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];