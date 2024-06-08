import { ApplicationConfig } from '@angular/core';
import { TitleStrategy, provideRouter } from '@angular/router';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { TemplatePageTitleStrategy } from '@layout/default/default.routes';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideAnimations(),
		provideHttpClient(withFetch()),
		{ provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
		provideAnimationsAsync(),
	],
};
