import { Component } from '@angular/core';
import { User, UserService } from '../../services/user-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfile {

  user: User | null = null;

  constructor(private userService: UserService){}

  ngOnInit() {
    this.user = this.userService.getLatestUser();
  }

}
