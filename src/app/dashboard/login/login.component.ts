import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formlogin: FormGroup;
  ConnectedUser: any;


  constructor(private router: Router, public appService: AppService) {
    this.formlogin = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.formlogin = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login(){
    this.appService.login(this.formlogin.value).subscribe((data: any) => {
      console.log(data);
      this.appService.Savetoken(data.access_token);
      console.log(data.access_token);
      const role = this.appService.ConnectedUser.role;
      console.log(role);
    if(role === 'client'){
      this.router.navigateByUrl('/client');
    }else{
      this.router.navigateByUrl('/pharmacie');
    }
    });
  }
  
}
