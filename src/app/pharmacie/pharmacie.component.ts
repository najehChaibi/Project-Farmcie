import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pharmacie',
  templateUrl: './pharmacie.component.html',
  styleUrls: ['./pharmacie.component.css']
})
export class PharmacieComponent implements OnInit {
pharmacie: any;
idPharm: any;
  constructor( private appService: AppService, private router: Router ) { }

  ngOnInit() {
    this.appService.getPharmacie(this.appService.ConnectedUser.pharmacie).subscribe((pharmacie: any) =>{console.log(pharmacie);
      console.log(pharmacie.nom);
      this.idPharm= this.appService.ConnectedUser.pharmacie;
    console.log(this.idPharm);
    
  });
  }
  
}
