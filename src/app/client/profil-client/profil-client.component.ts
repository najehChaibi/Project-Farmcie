import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil-client',
  templateUrl: './profil-client.component.html',
  styleUrls: ['./profil-client.component.css']
})
export class ProfilClientComponent implements OnInit {
client: any;
  constructor(public appService: AppService, private router: Router) { }

  ngOnInit() {
    this.appService.getClient(this.appService.ConnectedUser.client).subscribe((data: any) => {
      this.client = data;
      
   });
  }

}
