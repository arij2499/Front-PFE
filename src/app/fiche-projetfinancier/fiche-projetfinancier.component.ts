import { FactureService } from '../Services/facture.service';
import { Facture } from '../model/facture.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-fiche-projetfinancier',
  templateUrl: './fiche-projetfinancier.component.html',
  styleUrls: ['./fiche-projetfinancier.component.css']
})
export class FicheProjetfinancierComponent implements OnInit {
userConnect: any;
  factures: Facture[];
  constructor(private factureService : FactureService,
  private userService: UserService) { }

  ngOnInit()  {
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
    this.factureService.listeFacture().subscribe(prods =>
      {
console.log(prods);
        this.factures = prods;
      }
      );
    }
    supprimerFacture(p: Facture)
    {

    let conf = confirm("Etes-vous sûr ?");
      this.factureService.supprimerFacture(p.facture_id).subscribe(() => {
      console.log("fr supprimé");
      this.SuprimerFactureDuTableau(p);

    });

    }

    SuprimerFactureDuTableau(prod : Facture) {

      this.factures.forEach((cur, index) => {


      if(prod.facture_id=== cur.facture_id) {

      this.factures.splice(index, 1);
      }
      });
      }

}
