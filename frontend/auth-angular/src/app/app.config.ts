import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loginInterceptor } from './shared/interceptors/login-interceptor.interceptor';
import { getProfileInterceptor } from './shared/interceptors/get-profile.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient( withInterceptors([loginInterceptor, getProfileInterceptor]) ),
    provideRouter( routes )
  ]
};
