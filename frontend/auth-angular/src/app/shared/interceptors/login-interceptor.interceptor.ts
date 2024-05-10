import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export const loginInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  return next( req ).pipe( tap( ( response: any ) => {
      if( response.ok ){
        window.localStorage.setItem('token', JSON.stringify( response.body.accessToken ));
        console.log( 'token setted to localStorage' );
      }
    }
  ));
};
