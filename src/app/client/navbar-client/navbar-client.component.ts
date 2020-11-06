import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-client',
  templateUrl: './navbar-client.component.html',
  styleUrls: ['./navbar-client.component.css']
})
export class NavbarClientComponent implements OnInit {
client: any;
  constructor(public appService: AppService, private router: Router) { }
  


  ngOnInit() {
    this.appService.getClient(this.appService.ConnectedUser.client).subscribe((data: any) => {
      this.client = data;
   });
   console.log(this.appService.ConnectedUser.client);
   }


 panier(){
  this.router.navigateByUrl('client/panier');
 }
categorie(){
  this.router.navigateByUrl('/client/categorie');
}
 
 Logout() {
  this.router.navigateByUrl('dashboard/home');
  localStorage.removeItem('token');
}

}
