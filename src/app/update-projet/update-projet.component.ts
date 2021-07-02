
import { Projet } from '../model/projet.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProjetService } from '../Services/projet.service';
import { UserService } from '../Services/User.service';
@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styles: []
})
export class UpdateProjetComponent implements OnInit {
  public projets: Projet[];
userConnect: any;
  currentProjet  = new Projet();

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private userService: UserService,
    private projetService: ProjetService) { }

    ngOnInit() { 
      this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
        { console.log(prods);
          this.userConnect = prods;
        } );
      this.projetService.consulterProjet(this.activatedRoute.snapshot.params.id).
      subscribe( prod =>{ this.currentProjet = prod; }) ;

    }
    UpdateProjet()
    {  this.projetService.updateProjet(this.currentProjet).subscribe(() => {
      this.router.navigate(['projets']);
      },(error) => { alert("Problème lors de la modification !"); }
      );
     }

}
