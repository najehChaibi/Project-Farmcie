import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
id_client: any;
cat: any;
res:any;
medicament: any;
  constructor(private appService: AppService, public route: ActivatedRoute) {
    this.res = this.route.snapshot.params.cat;
   }

  ngOnInit() {
    this.id_client = this.appService.ConnectedUser.client;
   
   this.appService.getCategorie(this.res).subscribe((data: any)=>{
     this.medicament= data;
     console.log(this.medicament);
     
   })

  }

}
