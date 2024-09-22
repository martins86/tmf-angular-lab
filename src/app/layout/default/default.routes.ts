import { RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';

import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DefaultComponent } from './default.component';

const baseTitle = 'TMF Angular •';
export const LAYOUT_DEFAULT: Routes = [
	{
		path: '',
		component: DefaultComponent,
		children: [
			{
				path: '',
				title: `${baseTitle} Inicio`,
				loadChildren: () =>
					import('@pages/home/home.routes').then((m) => m.HOME_ROUTE),
			},
			{
				path: 'font-size',
				title: `${baseTitle} Font Size`,
				loadChildren: () =>
					import('@pages/font-size/font-size.routes').then(
						(m) => m.FONT_SIZE_ROUTE,
					),
			},
			{
				path: 'login',
				title: `${baseTitle} Entrar`,
				loadChildren: () =>
					import('@pages/authentication/login/login.routes').then(
						(m) => m.LOGIN_ROUTE,
					),
			},
			{
				path: 'logout',
				title: `${baseTitle} Sair`,
				loadChildren: () =>
					import('@pages/authentication/logout/logout.routes').then(
						(m) => m.LOGOUT_ROUTE,
					),
			},
			{
				path: 'registration',
				title: `${baseTitle} Registrar-se`,
				loadChildren: () =>
					import('@pages/authentication/registration/registration.routes').then(
						(m) => m.REGISTRATION_ROUTE,
					),
			},
			{
				path: '**',
				title: `${baseTitle} Não encontrado!`,
				loadChildren: () =>
					import('@pages/not-found/not-found.routes').then(
						(m) => m.NOTFOUND_ROUTE,
					),
			},
		],
	},
];

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
	constructor(private readonly title: Title) {
		super();
	}

	override updateTitle(routerState: RouterStateSnapshot): void {
		const title = this.buildTitle(routerState);
		if (title !== undefined) {
			this.title.setTitle(title);
		}
	}
}
