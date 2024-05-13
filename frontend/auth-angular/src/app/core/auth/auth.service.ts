import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Login, LoginResponse } from '../../shared/models/login';
import { environment} from '../../../environments/environment.development';
import { Router } from '@angular/router';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject( HttpClient );
  router = inject( Router );
  storageService = inject( StorageService );
  isLogged = signal<boolean>(false);

  constructor(){
    if( this.storageService.getToken() ){
      this.isLogged.set( true );
    } else{
      this.isLogged.set( false );
    }
  }

  login( formData: Login ) {
    this.http.post<LoginResponse>( `${environment.API_URL}/login`, formData ).subscribe( ( response ) => {

      if( this.storageService.getToken() ){
        console.log( 'Interception process done' );

        this.isLogged.set( true );
        this.router.navigate(['home']);
      }

    });
  }

  logout(){
    this.storageService.removeToken();
    this.storageService.removeUserId();
    this.isLogged.set( false );
    this.router.navigate(['home']);
  }
}
