import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetsComponent } from './projets/projets.component';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { ModelComponent } from './model/model.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { LoginComponent } from './login/login.component';
import { ProfilsComponent } from './profils/profils.component';
import { AddProfilComponent } from './add-profil/add-profil.component';
import { UpdateProfilComponent } from './update-profil/update-profil.component';
import { UsersComponent } from './users/users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { StructuresComponent } from './structures/structures.component';
import { AjustementComponent } from './ajustement/ajustement.component';
import { RealisationComponent } from './realisation/realisation.component';
import { FicheUserComponent } from './fiche-user/fiche-user.component';
import { FicheProjetComponent } from './fiche-projet/fiche-projet.component';
import { SuiviPhysiqueComponent } from './suivi-physique/suivi-physique.component';
import { FonctionsComponent } from './fonctions/fonctions.component';
import { DroitsComponent } from './droits/droits.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { RtechniqueComponent } from './rtechnique/rtechnique.component';
import { FinanciersComponent } from './financiers/financiers.component';
import { RmarchesComponent } from './rmarches/rmarches.component';
import { AddFonctionComponent } from './add-fonction/add-fonction.component';
import { UpdateFonctionComponent } from './update-fonction/update-fonction.component';
import { FacturesComponent } from './factures/factures.component';
import { AddFactureComponent } from './add-facture/add-facture.component';
import { UpdateFactureComponent } from './update-facture/update-facture.component';
import { PlanPassationComponent } from './plan-passation/plan-passation.component';
import { PlainitFinancierComponent } from './plainit-financier/plainit-financier.component';
import { PlantravailFinancierComponent } from './plantravail-financier/plantravail-financier.component';
import { FicheProjetfinancierComponent } from './fiche-projetfinancier/fiche-projetfinancier.component';
import { FicheProjetmarcheComponent } from './fiche-projetmarche/fiche-projetmarche.component';
import { UpdatePifComponent } from './update-pif/update-pif.component';
import { UpdatePtfComponent } from './update-ptf/update-ptf.component';
import { AddGrComponent } from './add-gr/add-gr.component';
import { UpdateGrComponent } from './update-gr/update-gr.component';
import { ConsulterUserComponent } from './consulter-user/consulter-user.component';
import { ConsulterProjetComponent } from './consulter-projet/consulter-projet.component';
import { UpdateDroitsComponent } from './update-droits/update-droits.component';
import { AddDroitsComponent } from './add-droits/add-droits.component';
import { ConsulterProjetfinancierComponent } from './consulter-projetfinancier/consulter-projetfinancier.component';
import { ConsulterProjetmarcheComponent } from './consulter-projetmarche/consulter-projetmarche.component';
import { ConsulterProjetphysiqueComponent } from './consulter-projetphysique/consulter-projetphysique.component';
import { FooterCompoenentComponent } from './footer-compoenent/footer-compoenent.component';
import { MenuCompoenentComponent } from './menu-compoenent/menu-compoenent.component';
import { ChatsComponentComponent } from './chats-component/chats-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetsComponent,
    AddProjetComponent,
    ModelComponent,
    UpdateProjetComponent,
    LoginComponent,
    ProfilsComponent,
    AddProfilComponent,
    UpdateProfilComponent,
    UsersComponent,
    UpdateUserComponent,
    AddUserComponent,
    StructuresComponent,
    AjustementComponent,
    RealisationComponent,
    FicheUserComponent,
    FicheProjetComponent,
    SuiviPhysiqueComponent,
    FonctionsComponent,
    DroitsComponent,
    DashboardComponent,
    RessourcesComponent,
    RtechniqueComponent,
    FinanciersComponent,
    RmarchesComponent,
    AddFonctionComponent,
    UpdateFonctionComponent,
    FacturesComponent,
    AddFactureComponent,
    UpdateFactureComponent,
    PlanPassationComponent,
    PlainitFinancierComponent,
    PlantravailFinancierComponent,
    FicheProjetfinancierComponent,
    FicheProjetmarcheComponent,
    UpdatePifComponent,
    UpdatePtfComponent,
    AddGrComponent,
    UpdateGrComponent,
    ConsulterUserComponent,
    ConsulterProjetComponent,
    UpdateDroitsComponent,
    AddDroitsComponent,
    ConsulterProjetfinancierComponent,
    ConsulterProjetmarcheComponent,
    ConsulterProjetphysiqueComponent,
    FooterCompoenentComponent,
    MenuCompoenentComponent,
    ChatsComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
