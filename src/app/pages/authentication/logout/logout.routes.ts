import { Routes } from '@angular/router';

import { LogoutComponent } from '@pages/authentication/logout/logout.component';

export const LOGOUT_ROUTE: Routes = [
	{
		path: '',
		component: LogoutComponent,
	},
];
