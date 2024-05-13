import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';
import { TopNavComponent } from '../layout/top-nav/top-nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TopNavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {

  }
}
