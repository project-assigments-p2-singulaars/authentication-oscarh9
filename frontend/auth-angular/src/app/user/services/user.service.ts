import { inject, Injectable, signal } from '@angular/core';
import { StorageService } from '../../core/storage/storage.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  storageService = inject( StorageService );
  http = inject( HttpClient );
  userData = signal<Partial<User>>({});

  getProfile(){
    const options = {};
    return this.http.get( `${environment.API_URL}/users/${this.storageService.getUserId()}`)
      .subscribe( ( res ) => this.userData.set( res ) );
  }
}
