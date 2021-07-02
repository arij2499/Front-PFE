import { Projet } from '../model/projet.model';
import { ProjetService } from '../Services/projet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../Services/User.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  projets: Projet[];
  users: User[];
  userConnect: any;
  currentUser = new User();
  newProjet= new Projet();
  constructor(private userService : UserService,private activatedRoute: ActivatedRoute,private router: Router,
    private projetService:ProjetService ) { }
  ngOnInit()  {
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
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
      console.log("profil supprimé");
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
      supprimerProjet(p: Projet)
      {

      let conf = confirm("Etes-vous sûr ?");
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


      addProjet()
      {
        this.projetService.ajouterProjet(this.newProjet).subscribe(prod=> {

          console.log(prod);

        }
        );

        this.router.navigate(['projets']).then(()=> {
          window.location.reload();
        });
      }
}
