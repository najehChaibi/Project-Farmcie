import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajouter-medicament',
  templateUrl: './ajouter-medicament.component.html',
  styleUrls: ['./ajouter-medicament.component.css']
})
export class AjouterMedicamentComponent implements OnInit {
  mediForm: FormGroup;
  selectedImage: File;
  imageSrc: any;
  medicaments: any;
  idPharm: any;

  constructor(private appService: AppService) { 
    this.mediForm= new FormGroup({
      nom: new FormControl(''),
      categorie: new FormControl(''),
      quantite: new FormControl(''),
      prix: new FormControl(''),
      description: new FormControl(''),
      date_fin: new FormControl(''),
      image: new FormControl('')

    });
  }

  ngOnInit() {}

  selectedFile(event) {
    this.selectedImage = event.target.files[0];
    console.log(this.selectedImage)
  }

  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;
      reader.readAsDataURL(file);
    }
  }

  addMedi(){
    console.log(this.mediForm.value);
    this.idPharm= this.appService.ConnectedUser.pharmacie;
    const dataForm = new FormData();
    dataForm.append('nom', this.mediForm.value.nom);
    dataForm.append('categorie', this.mediForm.value.categorie);
    dataForm.append('quantite', this.mediForm.value.quantite);
    dataForm.append('prix', this.mediForm.value.prix);
    dataForm.append('description', this.mediForm.value.description);
    dataForm.append('date_fin', this.mediForm.value.date_fin);
    dataForm.append('image', this.selectedImage, this.selectedImage.name);
    this.appService.addMedicament(this.idPharm, dataForm).subscribe((data: any)=>{
      this.medicaments = data;
     
    });
  }
}
