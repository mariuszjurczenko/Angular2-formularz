import { Component } from '@angular/core';

@Component({
  selector: 'signup-form',
  template: `
    <form (submit)="onSubmit()" novalidate>
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" [(ngModel)]="email" name="email" 
               required pattern=".+@.+">
      </div>
      <button type="submit" class="btn btn-primary">Rejestracja</button>
    </form>
  `,
  styles:[`
        input.ng-touched.ng-invalid { border:solid red 2px}
        input.ng-touched.ng-valid { border:solid green 2px}
    `]
})
export class SignupFormComponent {

  email = '';

  onSubmit(){
    console.log('Test onSubmit', this.email);
  }
}
