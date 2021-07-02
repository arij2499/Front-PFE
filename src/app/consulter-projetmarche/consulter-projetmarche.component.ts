import { ProjetService } from '../Services/projet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from '../model/projet.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-consulter-projetmarche',
  templateUrl: './consulter-projetmarche.component.html',
  styleUrls: ['./consulter-projetmarche.component.css']
})
export class ConsulterProjetmarcheComponent implements OnInit {

userConnect: any;
  projets: Projet[];
  currentProjet  = new Projet();
  constructor (private activatedRoute: ActivatedRoute,
    private router :Router,
    private userService: UserService,
    private projetService: ProjetService) {}

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
      this.projetService.consulterProjet(this.activatedRoute.snapshot.params.id).
    subscribe( prod =>{ this.currentProjet = prod; }) ;
    this.projetService.listeProjet().subscribe(prods =>
      {
  console.log(prods);
        this.projets = prods;
      }
      );
 }
 VisualiserProjet()
  {  this.projetService.visualiserProjet(this.currentProjet).subscribe(() => {
    this.router.navigate(['projets']);
    },(error) => { alert("Problème lors de consultation de projet !"); }
    );
  }


}
