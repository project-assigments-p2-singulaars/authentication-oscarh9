import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Login, LoginResponse } from '../../shared/models/login';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject( HttpClient );
  router = inject( Router );

  login( formData: Login ) {
    console.log( 'Estamos haciendo login', formData );

    this.http.post<LoginResponse>( `${environment.API_URL}/login`, formData ).subscribe( ( response ) => {
      // window.localStorage.setItem('token', JSON.stringify( response.accessToken ))

      if( window.localStorage.getItem('token') ){
        console.log( 'Interception process done' );
        this.router.navigate(['home']);
      }

    });

  }
}
