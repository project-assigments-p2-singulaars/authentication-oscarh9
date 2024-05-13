import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent implements OnInit {
  authService = inject( AuthService );

  ngOnInit(): void {
    console.log( this.authService.isLogged() );
  }

  handleLogout(){
    this.authService.logout();
  }
}
