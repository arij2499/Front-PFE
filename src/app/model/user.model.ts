import { Projet } from './projet.model';
import { Profil } from './profil.model';
import { Fonction } from './fonction.model';
import { FonctionsComponent } from '../fonctions/fonctions.component';


export class User{
  utilisateur_id:number;
  nomUtilisateur:string;
  motDePasse:string;

   datenaissance:Date;
  telephone:number;
  nom:string;
  prenom:string;
  email:string;
  structure:string;
  fonctions:Fonction;
  profil:Profil;
  projets:Projet[];
  chefProjet: boolean;
  admin: boolean;
 }
