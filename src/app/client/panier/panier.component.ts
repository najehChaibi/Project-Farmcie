import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
id_client: any;
client: any;
paniers: any;
  constructor(public appService: AppService) { }

  ngOnInit() {
    this.appService.getClient(this.appService.ConnectedUser.client).subscribe((data: any) => {
      this.client = data;
   });


    this.id_client = this.appService.ConnectedUser.client;
    this.appService.AffichPanier(this.id_client).subscribe((data: any)=>{
    
      this.paniers= data;
      console.log(this.paniers);
      console.log( this.paniers[3].panier[0].qnt);
      
    
    });
  }

}
