
import { Fonction } from '../model/fonction.model';

import { Component, OnInit } from '@angular/core';
import { FonctionService } from '../Services/fonction.service';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-fonctions',
  templateUrl: './fonctions.component.html',
  styleUrls: ['./fonctions.component.css']
})
export class FonctionsComponent implements OnInit {

  currentFonction = new Fonction();
  fonctions: Fonction[];
  userConnect: any;
  constructor ( private fonctionService : FonctionService,
  private userService: UserService) { }

  ngOnInit()  {
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
    this.fonctionService.listeFonction().subscribe(prods =>
      {
console.log(prods);
        this.fonctions = prods;
      }
      );
    }
    supprimerFonction(p:Fonction)
    {

    let conf = confirm("Etes-vous sûr ?");
      this.fonctionService.supprimerFonction(p.id_fonction).subscribe(() => {
      console.log("fct supprimé");
      this.SuprimerFonctionDuTableau(p);

    });

    }

    SuprimerFonctionDuTableau(prod : Fonction) {

      this.fonctions.forEach((cur, index) => {


      if(prod.id_fonction=== cur.id_fonction) {

      this.fonctions.splice(index, 1);
      }
      });
      }

}
