import { ProjetService } from '../Services/projet.service';
import { Projet } from '../model/projet.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-rtechnique',
  templateUrl: './rtechnique.component.html',
  styleUrls: ['./rtechnique.component.css']
})
export class RtechniqueComponent implements OnInit {
userConnect: any;
  projets: Projet[];
  constructor(private projetService : ProjetService,
  private userService: UserService) { }

  ngOnInit() { 
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
  }

}
