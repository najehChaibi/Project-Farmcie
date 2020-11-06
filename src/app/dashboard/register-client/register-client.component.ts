import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {
  FormClient: FormGroup;
  selectedImage: File;
  imageSrc: any;

  constructor(public appService: AppService, private router: Router) {
    this.FormClient = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    });
  }

  ngOnInit() {
    this.FormClient = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    });
  }
 

  selectedFile(event) {
    this.selectedImage = event.target.files[0];
  }

  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;
      reader.readAsDataURL(file);
    }
  }
  registerClient() {
    const dataForm = new FormData();
    dataForm.append('nom', this.FormClient.value.nom);
    dataForm.append('prenom', this.FormClient.value.prenom);
    dataForm.append('adresse', this.FormClient.value.adresse);
    dataForm.append('telephone', this.FormClient.value.telephone);
    dataForm.append('email', this.FormClient.value.email);
    dataForm.append('password', this.FormClient.value.password);
    dataForm.append('image', this.selectedImage, this.selectedImage.name)
    console.log(this.selectedImage.name);
    this.appService.addClient(dataForm).subscribe(res => {
      console.log(res);
      this.router.navigate(['/dashboard/login']);

    });


  }

}
