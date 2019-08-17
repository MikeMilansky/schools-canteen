import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/modules/shared/services/auth-service/auth.service';
import { ILogin } from 'src/app/modules/shared/interfaces/login';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private fb: FormBuilder, private authSerivce: AuthService, private toastr: ToastrService) { }

  public onSubmit(): void {
    this.authSerivce.login(this.loginGroup.value)
      .subscribe((response: ILogin) => {

      }, ((error: HttpErrorResponse) => {
        this.toastr.error('Unexpected Error');
        console.error(error);
      }));
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
