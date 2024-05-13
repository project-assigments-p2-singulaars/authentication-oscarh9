import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { StorageService } from '../../core/storage/storage.service';
import { environment } from '../../../environments/environment.development';
import { tap } from 'rxjs';
import { User } from '../models/login';

export const getProfileInterceptor: HttpInterceptorFn = (req, next) => {

  const storage = inject( StorageService );

  if( req.url.startsWith(`${environment.API_URL}/users`) ){

    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${ storage.getToken() }`
      }
    });

    // console.log( 'new headers: ', req );

    return next(req).pipe( tap( ( response: any ) => {
      const body = response.body as User;
      delete body?.password;
      return body;
    }) );
  }

  return next(req);
};
