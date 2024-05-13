import { Component, inject, OnInit, Signal } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../../shared/models/login';
import { JsonPipe } from '@angular/common';
import { TopNavComponent } from '../../layout/top-nav/top-nav.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [JsonPipe, TopNavComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  userService = inject( UserService );
  profileData = this.userService.userData;

  ngOnInit(): void {
    this.userService.getProfile();
  }
}
