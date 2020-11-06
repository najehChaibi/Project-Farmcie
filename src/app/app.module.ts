import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule, MatSnackBarModule, MatFormFieldModule, MatButtonModule, MatRippleModule, MatSelectModule, MatTooltipModule, MatIconModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { HomeComponent } from './dashboard/home/home.component';
import { RegisterClientComponent } from './dashboard/register-client/register-client.component';
import { RegisterPharmacieComponent } from './dashboard/register-pharmacie/register-pharmacie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientComponent } from './client/client.component';
import { PharmacieComponent } from './pharmacie/pharmacie.component';
import { LoginComponent } from './dashboard/login/login.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeClientComponent } from './client/home-client/home-client.component';
import { NavbarClientComponent } from './client/navbar-client/navbar-client.component';
import { PanierComponent } from './client/panier/panier.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListeMedicamentComponent } from './pharmacie/liste-medicament/liste-medicament.component';
import { ProfilComponent } from './pharmacie/profil/profil.component';
import { ProfilClientComponent } from './client/profil-client/profil-client.component';
import { NavbarPharmacieComponent } from './pharmacie/navbar-pharmacie/navbar-pharmacie.component';
import { SidebarPharmacieComponent } from './pharmacie/sidebar-pharmacie/sidebar-pharmacie.component';
import { CategorieComponent } from './client/categorie/categorie.component';
import { DashboardPharmacieComponent } from './pharmacie/dashboard-pharmacie/dashboard-pharmacie.component';
import { AjouterMedicamentComponent } from './pharmacie/ajouter-medicament/ajouter-medicament.component';
import { FilterMediPipe } from './filter-medi.pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { DetailMedicamentComponent } from './pharmacie/detail-medicament/detail-medicament.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    HomeComponent,
    RegisterClientComponent,
    RegisterPharmacieComponent,
    LoginComponent,
    ClientComponent,
    PharmacieComponent,
    HomeClientComponent,
    NavbarClientComponent,
    PanierComponent,
    ListeMedicamentComponent,
    ProfilComponent,
    ProfilClientComponent,
    NavbarPharmacieComponent,
    SidebarPharmacieComponent,
    CategorieComponent,
    DashboardPharmacieComponent,
    AjouterMedicamentComponent,
    FilterMediPipe,
    DetailMedicamentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    FilterPipeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
