import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MesRecrutementsComponent } from './mes-recrutements/mes-recrutements.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvitationCondidatsComponent } from './invitation-condidats/invitation-condidats.component';
import { VideosComponent } from './videos/videos.component';
import { CollaborateursComponent } from './collaborateurs/collaborateurs.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { RecrutementService} from './Services/recrutement.service';
import { GestionOffresComponent } from './gestion-offres/gestion-offres.component';
import { AjoutModifOffreComponent } from './gestion-offres/ajout-modif-offre/ajout-modif-offre.component';
import { AffichOffreComponent } from './gestion-offres/affich-offre/affich-offre.component';
import { DetailOffreComponent } from './gestion-offres/detail-offre/detail-offre.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { OffresService } from './Services/offres.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReponseCandidatComponent } from './reponse-candidat/reponse-candidat.component';
import { RecrutementTraiteComponent } from './recrutement-traite/recrutement-traite.component';
import { RecrutementNonTraiteComponent } from './recrutement-non-traite/recrutement-non-traite.component';
import { RecrutementPartageeComponent } from './recrutement-partagee/recrutement-partagee.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { AjoutCollaborateurComponent } from './ajout-collaborateur/ajout-collaborateur.component';
import { CollaborateurService } from './Services/collaborateur.service';
import { AjoutModifCandidatComponent } from './Candidats/ajout-modif-candidat/ajout-modif-candidat.component';
import { ListCandidatComponent } from './Candidats/list-candidat/list-candidat.component';
import { CandidatService } from './Services/candidat.service';


//import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const routes: Routes = [
  {path:'', component: AcceuilComponent},
  {path:'Acceuil', component: AcceuilComponent},
  {path:'Mes-Recrutements', component: MesRecrutementsComponent},
  {path:'Invitation-Condidats', component: InvitationCondidatsComponent},
  {path:'Videos', component: VideosComponent},
  {path: 'Candidats', component: ListCandidatComponent},
  {path: 'Collaborateurs', component: CollaborateursComponent},
  {path:'Commentaires', component: CommentaireComponent},
  {path:'Fich-Entretient', component: GestionOffresComponent},
  {path:'Reponse-Condidat', component: ReponseCandidatComponent},
  {path:'Recrutement-traite', component: RecrutementTraiteComponent},
  {path:'Recrutement-non-traite', component: RecrutementNonTraiteComponent},
  {path:'Recrutement-partage', component: RecrutementPartageeComponent},
  {path:'Questionnaires', component: QuestionnaireComponent},
  {path:'AjoutCollaborateur', component: AjoutCollaborateurComponent},
  {path:'AjoutCandidat', component: AjoutModifCandidatComponent}




];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
    AcceuilComponent,
    MesRecrutementsComponent,
    DashboardComponent,
    InvitationCondidatsComponent,
    VideosComponent,
    CollaborateursComponent,
    CommentaireComponent,
    GestionOffresComponent,
    AjoutModifOffreComponent,
    AffichOffreComponent,
    DetailOffreComponent,
    ReponseCandidatComponent,
    RecrutementTraiteComponent,
    RecrutementNonTraiteComponent,
    RecrutementPartageeComponent,
    QuestionnaireComponent,
    AjoutCollaborateurComponent,
    AjoutModifCandidatComponent,
    ListCandidatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
 
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
    //BsDatepickerModule.forRoot()
  ],
  providers: [
    
    RecrutementService,
    OffresService,
    CollaborateurService,
    CandidatService
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
