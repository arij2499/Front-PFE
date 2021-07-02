import { ProjetService } from '../Services/projet.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Projet } from '../model/projet.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-fiche-projet',
  templateUrl: './fiche-projet.component.html',
  styleUrls: ['./fiche-projet.component.css']
})
export class FicheProjetComponent implements OnInit {
userConnect: any;
  currentProjet  = new Projet();
  constructor (private activatedRoute: ActivatedRoute,
    private router :Router,
    private projetService: ProjetService,
  private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
      this.projetService.consulterProjet(this.activatedRoute.snapshot.params.id).
    subscribe( prod =>{ this.currentProjet = prod; }) ;
 }
 VisualiserProjet()
  {  this.projetService.visualiserProjet(this.currentProjet).subscribe(() => {
    this.router.navigate(['projets']);
    },(error) => { alert("Problème lors de consultation de projet !"); }
    );
  }

}
