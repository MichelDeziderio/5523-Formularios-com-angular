import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  model: any = {};

  login(form: any) {
    console.log('E-mail:',this.model.email);
    console.log('password:',this.model.password);

    console.log('form', form);
    form.reset();
  }
}
