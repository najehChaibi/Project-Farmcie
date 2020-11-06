import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { RegisterClientComponent } from './dashboard/register-client/register-client.component';
import { RegisterPharmacieComponent } from './dashboard/register-pharmacie/register-pharmacie.component';

import { ClientComponent } from './client/client.component';
import { PharmacieComponent } from './pharmacie/pharmacie.component';
import { LoginComponent } from './dashboard/login/login.component';

import { HomeClientComponent } from './client/home-client/home-client.component';
import { NavbarClientComponent } from './client/navbar-client/navbar-client.component';
import { AuthguardGuard } from './authguard.guard';
import { PanierComponent } from './client/panier/panier.component';
import { ListeMedicamentComponent } from './pharmacie/liste-medicament/liste-medicament.component';
import { ProfilComponent } from './pharmacie/profil/profil.component';
import { ProfilClientComponent } from './client/profil-client/profil-client.component';
import { NavbarPharmacieComponent } from './pharmacie/navbar-pharmacie/navbar-pharmacie.component';
import { SidebarPharmacieComponent } from './pharmacie/sidebar-pharmacie/sidebar-pharmacie.component';
import { CategorieComponent } from './client/categorie/categorie.component';
import { DashboardPharmacieComponent } from './pharmacie/dashboard-pharmacie/dashboard-pharmacie.component';
import { AjouterMedicamentComponent } from './pharmacie/ajouter-medicament/ajouter-medicament.component';
import { DetailMedicamentComponent } from './pharmacie/detail-medicament/detail-medicament.component';


const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent },
      { path: 'RegisterClient', component: RegisterClientComponent },
      { path: 'RegisterPharmacie', component: RegisterPharmacieComponent },
      { path: 'login', component: LoginComponent }]
  },
  {
    path: 'client', component: ClientComponent,
    canActivate: [AuthguardGuard],
    children: [
      { path: 'homeClient', component: HomeClientComponent },
      { path: '', component: HomeClientComponent },
      { path: 'navbarClient', component: NavbarClientComponent },
      { path: 'panier', component: PanierComponent },
      { path: 'profil-client', component: ProfilClientComponent },
      { path: 'categorie', component: CategorieComponent }

    ]
  },
  {
    path: 'pharmacie', component: PharmacieComponent,
    canActivate: [AuthguardGuard],
    children: [
      { path: 'dashboardpharmacie', component: DashboardPharmacieComponent },
      { path: '', component: DashboardPharmacieComponent },
      { path: 'listemedicament', component: ListeMedicamentComponent },
      { path: 'profil', component: ProfilComponent },
      { path: 'navbar-pharmacie', component: NavbarPharmacieComponent },
      { path: 'sidebar-pharmacie', component: SidebarPharmacieComponent },
      {path: 'ajouter-medicament', component: AjouterMedicamentComponent},
      {path: 'detail-medicament/:id', component: DetailMedicamentComponent}

    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
