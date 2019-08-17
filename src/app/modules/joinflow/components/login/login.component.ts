import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/modules/shared/services/auth-service/auth.service';
import { ILogin } from 'src/app/modules/shared/interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {

  public loginGroup: FormGroup;
  public loginControl: FormControl;
  public passwordControl: FormControl;

  constructor(
    private fb: FormBuilder,
    private authSerivce: AuthService
  ) { }

  public onSubmit(): void {
    this.authSerivce.login(this.loginGroup.value)
      .subscribe((result: ILogin) => {

      });
  }

  public ngOnInit(): void {
    this.loginControl = new FormControl();
    this.passwordControl = new FormControl();

    this.loginGroup = this.fb.group({
      login: this.loginControl,
      passowrd: this.passwordControl,
    });
  }
}
