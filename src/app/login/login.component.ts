import { Projet } from '../model/projet.model';
import { Profil } from '../model/profil.model';
import { Fonction } from '../model/fonction.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user =new User();
   f= new Fonction();
p=new Projet();
pr=new Profil();

public loggedUser: string;
 public isloggedIn: Boolean=false;
 public loggedID: any;
 public userConnect : any;
  erreur=0;
  // fonctions:Fonction[];
  constructor( private authService: AuthService,
    private router: Router) {
    }
  ngOnInit() {
  }
  islogin(){
    return this.isloggedIn;
  }
onLoggedin()
  {
 this.authService.getUserFromBD(this.user.nomUtilisateur).subscribe((usr:User) => {
this.userConnect = usr;
// console.log('user',localStorage.getItem('userConnect'));
this.loggedUser = usr.nomUtilisateur;
console.log('name',localStorage.getItem('userConnect'));
this.loggedID = usr.utilisateur_id;
// console.log('id',localStorage.getItem('id'));
this.isloggedIn = true;
/*   this.p=usr.projets; */
  this.pr=usr.profil;

  if (usr.motDePasse== this.user.motDePasse)

  {
    this.authService.SignIn(usr)
    if(this.user.chefProjet=true){
      this.router.navigate (['/projets']);
    }
     if(this.user.admin=true)
    {console.log("je vais acceder page 1 admin");
    this.router.navigate (['/users']);
    }

     if (this.pr.fonctions[0].nom_fonction=="responsable technique"){
      this.router.navigate (['/Rtechnique']);
              }
    else if (this.pr.fonctions[0].nom_fonction=="financier"){
      this.router.navigate (['/financiers']);
              }
              else if (this.pr.fonctions[0].nom_fonction=="responsable marché"){
                this.router.navigate (['/rmarches']);
                        }
}
  else
  this.erreur = 1;

},(err) => console.log (err) );

}





}
