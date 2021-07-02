import { ConsulterProjetphysiqueComponent } from './consulter-projetphysique/consulter-projetphysique.component';
import { ConsulterProjetmarcheComponent } from './consulter-projetmarche/consulter-projetmarche.component';
import { ConsulterProjetfinancierComponent } from './consulter-projetfinancier/consulter-projetfinancier.component';
import { AddDroitsComponent } from './add-droits/add-droits.component';
import { ConsulterProjetComponent } from './consulter-projet/consulter-projet.component';
import { PlainitFinancierComponent } from './plainit-financier/plainit-financier.component';
import { ConsulterUserComponent } from './consulter-user/consulter-user.component';
import { AddGrComponent } from './add-gr/add-gr.component';
import { UpdateGrComponent } from './update-gr/update-gr.component';
import { UpdatePtfComponent } from './update-ptf/update-ptf.component';
import { PlantravailFinancierComponent } from './plantravail-financier/plantravail-financier.component';
import { UpdatePifComponent } from './update-pif/update-pif.component';
import { SuiviPhysiqueComponent } from './suivi-physique/suivi-physique.component';
import { FicheProjetmarcheComponent } from './fiche-projetmarche/fiche-projetmarche.component';
import { FicheProjetfinancierComponent } from './fiche-projetfinancier/fiche-projetfinancier.component';
import { AddFactureComponent } from './add-facture/add-facture.component';
import { UpdateFactureComponent } from './update-facture/update-facture.component';
import { FacturesComponent } from './factures/factures.component';
import { UpdateFonctionComponent } from './update-fonction/update-fonction.component';


import { FinanciersComponent } from './financiers/financiers.component';
import { RmarchesComponent } from './rmarches/rmarches.component';
import { RtechniqueComponent } from './rtechnique/rtechnique.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DroitsComponent } from './droits/droits.component';
import { FicheProjetComponent } from './fiche-projet/fiche-projet.component';
import { FicheUserComponent } from './fiche-user/fiche-user.component';
import { RealisationComponent } from './realisation/realisation.component';
import { AjustementComponent } from './ajustement/ajustement.component';
import { AuthService } from './Services/auth.service';
import { User } from './model/user.model';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersComponent } from './users/users.component';
import { AddProfilComponent } from './add-profil/add-profil.component';
import { UpdateProfilComponent } from './update-profil/update-profil.component';
import { ProfilsComponent } from './profils/profils.component';
import { LoginComponent } from './login/login.component';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { ProjetsComponent } from './projets/projets.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { FonctionsComponent } from './fonctions/fonctions.component';
import { AddFonctionComponent } from './add-fonction/add-fonction.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  {path: 'projets', component:ProjetsComponent},
  {path: 'add-projet', component:AddProjetComponent},
  {path:'updateProjet/:id',component:UpdateProjetComponent},
  {path: 'profils',component:ProfilsComponent},
  {path:'updateProfil/:id',component:UpdateProfilComponent},
  {path: 'add-profil', component:AddProfilComponent},
  {path: 'users', component:UsersComponent},
  {path: 'add-user', component:AddUserComponent},
  {path:'updateUser/:id',component:UpdateUserComponent},
  {path: 'ajustement', component:AjustementComponent},
  {path: 'realisation', component:RealisationComponent},
  {path: 'fiche-user', component:FicheUserComponent},
  {path: 'fiche-projet', component:FicheProjetComponent},
  {path: 'fonctions', component:FonctionsComponent},
  {path: 'droits', component:DroitsComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'ressources', component:RessourcesComponent},
  {path: 'Rtechnique', component:RtechniqueComponent},
  {path: 'rmarches', component:RmarchesComponent},
  {path: 'financiers', component:FinanciersComponent},
  {path: 'add-fonction', component:AddFonctionComponent},
  {path: 'updateFonction/:id', component:UpdateFonctionComponent},
  {path: 'factures', component:FacturesComponent},
  {path:'updateFacture/:id',component:UpdateFactureComponent},
  {path: 'add-facture', component:AddFactureComponent},
  {path: 'plainit-financier', component:PlainitFinancierComponent},
  {path: 'ficheprojetfinancier/id', component:FicheProjetfinancierComponent},
  {path: 'fiche-projetmarche', component:FicheProjetmarcheComponent},
  {path: 'suivi-physique', component:SuiviPhysiqueComponent},
  {path: 'update-pif', component:UpdatePifComponent},
  {path: 'plantravail-financier', component:PlantravailFinancierComponent},
  {path: 'update-ptf', component:UpdatePtfComponent},
  {path: 'update-gr', component:UpdateGrComponent},
  {path: 'add-gr', component:AddGrComponent},
  {path: 'consulterUser/:id', component:ConsulterUserComponent},
  {path: 'consulterProjet/:id', component:ConsulterProjetComponent},
  {path: 'add-droits', component:AddDroitsComponent},

{path: 'consulterProjetfinancier/:id', component:ConsulterProjetfinancierComponent},
{path: 'consulterProjetmarche/:id', component:ConsulterProjetmarcheComponent},
{path: 'consulterProjetphysique/:id', component:ConsulterProjetphysiqueComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
