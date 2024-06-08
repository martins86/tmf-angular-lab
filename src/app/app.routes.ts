import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('@layout/default/default.routes').then((m) => m.LAYOUT_DEFAULT),
	},
];
