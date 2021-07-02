import { Profil } from '../model/profil.model';
import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../Services/profil.service';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-profils',
  templateUrl: './profils.component.html',
  styleUrls: ['./profils.component.css']
})
export class ProfilsComponent implements OnInit {
userConnect: any;
  profils: Profil[];
  constructor(private profilService : ProfilService,
  private userService: UserService) { }

  ngOnInit()  {
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
