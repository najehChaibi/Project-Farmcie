import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl, Validators} from '@angular/forms'; 
import {AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-pharmacie',
  templateUrl: './register-pharmacie.component.html',
  styleUrls: ['./register-pharmacie.component.css']
})
export class RegisterPharmacieComponent implements OnInit {
  formpharmacie: FormGroup;
  role: any;

  constructor(public appService: AppService,  private router: Router) {
  
    this.formpharmacie = new FormGroup({
      nom: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      adresse: new FormControl('', Validators.required)

    });
   }

  ngOnInit() {
    this.formpharmacie = new FormGroup({
      nom: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      adresse: new FormControl('', Validators.required)

    });
    //const dataForm = new FormData();
      //dataForm.append('nom', this.formpharmacie.value.nom);
     // dataForm.append('telephone', this.formpharmacie.value.telephone);
      //dataForm.append('email', this.formpharmacie.value.email);
     // dataForm.append('password', this.formpharmacie.value.password);
      //dataForm.append('adresse', this.formpharmacie.value.adresse);
     // dataForm.append('role', 'pharmacie');
  }
  register(){
    console.log(this.formpharmacie.value);
    this.appService.addPharmacie(this.formpharmacie.value).subscribe(res =>{
      console.log(res);
      this.router.navigate(['/dashboard/login']);
    });
  }

}
