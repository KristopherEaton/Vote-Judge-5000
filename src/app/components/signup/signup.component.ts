import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  contactForm: FormGroup;
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  isHeaderSticking = false;
  destroy$ = new Subject();
  constructor(private formBuilder: FormBuilder,
    private router: Router,) {this.createFeedbackForm(); }

  ngOnInit(): void {
  }
  createFeedbackForm(): void {
    this.contactForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      message: [''],
      os: [''],
      topic: [''],
    });
  }

  onSubmit(): void {
    // console.log('Your form data : ', this.feedbackForm.value);
    this.sendContactEmail();
    this.router.navigate(['/home']);
  }

  sendContactEmail(){
    //trigger email with sender
  }
}
