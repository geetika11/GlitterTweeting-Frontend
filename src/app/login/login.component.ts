import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorList: string[] = [];
  showValidationMessages: Boolean;
  constructor(private apiService: ApiService,private router: Router) { }

  ngOnInit() {
  }
  login(formValues) {
    this.apiService.LoginUser( formValues.Email, formValues.Password)
      .subscribe(
        (data) => {
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          this.errorList = [];
          const errorMessage = error['error']['message'];
          this.errorList.push(`${errorMessage}`);
        }
      );
  }
}
