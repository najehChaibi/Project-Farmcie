import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class AppService {
  ConnectedUser: any;
 

  constructor(private http: HttpClient) { 
  this.ConnectedUser = this.getConnectedUser(); 

  
  }
  login(body) {
    return this.http.post('http://localhost:3000/users/login', body);
  }
  addPharmacie(body) {
    return this.http.post('http://localhost:3000/pharmacies/RegisterPharmacie', body);
  }

addClient(body){
  return this.http.post('http://localhost:3000/clients/RegisterClient', body);
}



addMedicament(id, medi){
  return this.http.post(`http://localhost:3000/medicaments/addMedicament/${id}`, medi);
}
getClient(id){
   //const header = new HttpHeaders().append('Authorization', 'Bearer ' + localStorage.getItem('token'));, { headers: header }
  return this.http.get(`http://localhost:3000/clients/getClient/${id}` );
}

AjoutePanier(idMedicament, idClient){
  return this.http.post(`http://localhost:3000/medicaments/AjoutePanier/${idMedicament}/${idClient}`,{});
}

AffichPanier(idClient){
  return this.http.get(`http://localhost:3000/medicaments/AffichPanier/${idClient}`);
}

allMedicament(){
  return this.http.get('http://localhost:3000/medicaments/allMedicament');
}

getMedicament(id){
  return this.http.get(`http://localhost:3000/medicaments/oneMedicament/${id}`, {});
}

getMedicamentPharm(id: any){
  return this.http.get(`http://localhost:3000/medicaments/AllMedicamentPharm/${id}`);
}
getPharmacie(id){
  //const header = new HttpHeaders().append('Authorization', 'Bearer ' + localStorage.getItem('token'));, { headers: header }
 return this.http.get(`http://localhost:3000/pharmacies/getPharmacie/${id}` );
}

getCategorie(categorie){
  return this.http.get(`http://localhost:3000/medicaments/allMedicamentCat/${categorie}`, {});
}

getConnectedUser(){
  if(localStorage.getItem('token')){
    const token= localStorage.getItem('token');
    console.log(jwt_decode(token).data);
    return jwt_decode(token).data;
  } else return null;
}

 Savetoken(token){
   localStorage.setItem('token', token);
   this.ConnectedUser= this.getConnectedUser();
 }




 


}


