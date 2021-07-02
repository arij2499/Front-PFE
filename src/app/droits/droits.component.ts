import { ProfilService } from '../Services/profil.service';
import { Profil } from '../model/profil.model';
import { Fonction } from '../model/fonction.model';
import { FonctionService } from '../Services/fonction.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-droits',
  templateUrl: './droits.component.html',
  styleUrls: ['./droits.component.css']
})
export class DroitsComponent implements OnInit {
  fonctions: Fonction[];
  profils: Profil[];
  f=new Fonction();
  userConnect: any;
  profil=new Profil();
  constructor(private userService:UserService, private fonctionService : FonctionService,private profilService : ProfilService) { }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
   /*  this.profilService.consulterProfil(this.profil.idProfil).subscribe((psr:Profil) => {

      this.f=psr.fonctions; } ); */

     this.fonctionService.listeFonction().subscribe(frods =>
    {
console.log(frods);
      this.fonctions = frods;
    }
    );
    this.profilService.listeProfil().subscribe(prods =>
      {
console.log(prods);
        this.profils = prods;
      }
      );
    }
    supprimerProfil(p: Profil)
    {

    let conf = confirm("Etes-vous sûr ?");
      this.profilService.supprimerProfil(p.idProfil).subscribe(() => {
      console.log("profil supprimé");
      this.SuprimerProfilDuTableau(p);

    });

    }

    SuprimerProfilDuTableau(prod : Profil) {

      this.profils.forEach((cur, index) => {


      if(prod.idProfil=== cur.idProfil) {

      this.profils.splice(index, 1);
      }
      });
      }
  }
