import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-medicament',
  templateUrl: './liste-medicament.component.html',
  styleUrls: ['./liste-medicament.component.css']
})
export class ListeMedicamentComponent implements OnInit {
idPharm: any;
medicaments: any;
id: any;
  constructor(private appService: AppService, public router: Router) { }

  ngOnInit() {
    this.idPharm= this.appService.ConnectedUser.pharmacie;
    console.log(this.idPharm);
    this.appService.getMedicamentPharm(this.idPharm).subscribe((data: any) =>{
    this.medicaments= data;
    console.log(this.medicaments);
    });
  }
 ajoute(){
  this.router.navigate(['/pharmacie/ajouter-medicament']);
 }

 detail(id){
this.router.navigate(['/pharmacie/detail-medicament', id]);
 }

}
