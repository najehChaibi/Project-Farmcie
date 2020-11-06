import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-medicament',
  templateUrl: './detail-medicament.component.html',
  styleUrls: ['./detail-medicament.component.css']
})
export class DetailMedicamentComponent implements OnInit {
res: any;
medicaments: any;
  constructor(public appService: AppService, private route: ActivatedRoute) { 
    this.res = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.appService.getMedicament(this.res).subscribe((data: any)=> {
      this.medicaments= data;
      console.log(this.medicaments);
      
    });
  }

}
