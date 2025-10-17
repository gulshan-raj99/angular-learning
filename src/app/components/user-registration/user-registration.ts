import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './user-registration.html',
  styleUrl: './user-registration.css'
})
export class UserRegistration {
  registrationForm: any;

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ){}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      company: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if(this.registrationForm.valid) {
      const userData = this.registrationForm.value;
      this.userService.addUser(userData as any);
      this.router.navigate(['/profile']);
     } else {
        alert('Please fill all required fields correctly.');
      }
  }
}
