import { Routes } from '@angular/router';

import { LoginComponent } from '@pages/authentication/login/login.component';

export const LOGIN_ROUTE: Routes = [
	{
		path: '',
		component: LoginComponent,
	},
];
