import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.css']
})
export class HomeClientComponent implements OnInit {
  medicaments =[];
  id_client: any;
  id_medicament: any;
  panier: any;
  userFilter: any = { nom: '' };
  _id: any;
  q: any;
  constructor(public appService: AppService, private filterPipe: FilterPipe) {
    console.log(filterPipe.transform(this.medicaments, { nom: 'M'}));
    
  }
  ngOnInit() {
    // this.appService.getClient(this.appService.ConnectedUser.client).subscribe((data:any)=>{
    this.id_client = this.appService.ConnectedUser.client;
    console.log(this.id_client);
    this.appService.allMedicament().subscribe((data: any) => {
      this.medicaments = data;
      console.log(this.medicaments);
    });
  }
 // oneMedicament(id){
  //   this.appService.getMedicament(id).subscribe((data: any) => {
  //     this.id_medicament = data;
  //     this._id = this.id_medicament._id;
      
  //     console.log(this._id);
  //   });
  // }

  Ajoute(medi) {
    console.log (medi);
     this.appService.AjoutePanier(medi, this.id_client).subscribe((data: any) => {
  console.log(data);
  });
  }





}
