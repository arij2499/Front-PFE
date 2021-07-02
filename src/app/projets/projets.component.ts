

import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit, Injectable } from '@angular/core';
import { Projet } from '../model/projet.model';
import { ProjetService } from '../Services/projet.service';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})


@Injectable({
  providedIn: 'root'

})

export class ProjetsComponent implements OnInit {
userConnect: any;
projets: Projet[];
  constructor(private projetService : ProjetService, private userService: UserService) { }

  ngOnInit()  {
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
    this.projetService.listeProjet().subscribe(prods =>
      {
console.log(prods);
        this.projets = prods;
      }
      );
     /*    this.userService.listeUser().subscribe(prods =>
          { console.log(prods);
            this.users = prods;
          } ); */
    }


    supprimerProjet(p: Projet)
    {

    let conf = confirm("Etes-vous sûr de supprimer ce projet?");
      this.projetService.supprimerProjet(p.projet_id).subscribe(() => {
      console.log("pro supprimé");
      this.SuprimerProjetDuTableau(p);

    });

    }

    SuprimerProjetDuTableau(prod : Projet) {

      this.projets.forEach((cur, index) => {


      if(prod.projet_id=== cur.projet_id) {

      this.projets.splice(index, 1);
      }
      });
      }


  }
