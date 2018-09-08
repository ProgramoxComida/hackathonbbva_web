import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required]],
      business_social_name: ['', Validators.required],
      business_social_rfc: ['', Validators.required],
      business_social_address: ['', Validators.required],
      business_start: ['', Validators.required],
      busines_end: ['', Validators.required],
      accept_terms: ['', Validators.required]
    });
  }

  onSubmit() {

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
}

}
