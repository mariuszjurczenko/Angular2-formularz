import { Component } from '@angular/core';

@Component({
  selector: 'signup-form',
  template: `
    <form (submit)="onSubmit(form)" novalidate #form="ngForm">
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" [(ngModel)]="email" name="email" #emailField="ngModel"
               required pattern=".+@.+">
        <p *ngIf="emailField.touched && emailField.invalid && emailField.errors.required" 
            class="alert alert-danger">Wymagany jest adres email</p>
        <p *ngIf="emailField.touched && emailField.invalid && emailField.errors.pattern" 
            class="alert alert-danger">Adres email jest nieprawidłowy</p>
      </div>

       <div class="form-group">
        <label>Hasło</label>
        <input type="password" class="form-control" [(ngModel)]="password" name="password" #passwordField="ngModel"
               required>
        <p *ngIf="passwordField.touched && passwordField.invalid" 
            class="alert alert-danger">Wymagany jest hasło</p>
      </div>

      <button type="submit" class="btn btn-primary" [disabled]="form.invalid">Rejestracja</button>
    </form>
  `,
  styles:[`
        input.ng-touched.ng-invalid { border:solid red 2px}
        input.ng-touched.ng-valid { border:solid green 2px}
    `]
})
export class SignupFormComponent {

  email = '';
  password = '';

  onSubmit(form){
    console.log('Test onSubmit', this.email);
    form.resetForm();
  }
}
