import { ProjetService } from '../Services/projet.service';
import { Projet } from '../model/projet.model';
import { UserService } from '../Services/User.service';
import { User } from '../model/user.model';
import { ProfilService } from '../Services/profil.service';
import { Profil } from '../model/profil.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.css']
})
export class RessourcesComponent implements OnInit {
  users: User[];
  projets: Projet[];
userConnect: any;
  profils: Profil[];
  constructor(private profilService : ProfilService,private userService : UserService ,private projetService : ProjetService) { }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
    this.profilService.listeProfil().subscribe(prods =>
      {
       
console.log(prods);
        this.profils = prods;
      }
      );

      this.userService.listeUser().subscribe(prods =>
        { console.log(prods);
          this.users = prods;
        } );
        this.projetService.listeProjet().subscribe(prods =>
          {
    console.log(prods);
            this.projets = prods;
          }
          );
  }
  supprimerUser(p: User)
  {

  let conf = confirm("Etes-vous sûr ?");
    this.userService.supprimerUser(p.utilisateur_id).subscribe(() => {
    console.log("ressource supprimé");
    this.SuprimerUserDuTableau(p);

  });

  }

  SuprimerUserDuTableau(prod : User) {

    this.users.forEach((cur, index) => {


    if(prod.utilisateur_id=== cur.utilisateur_id) {

    this.users.splice(index, 1);
    }
    });
    }
  }
