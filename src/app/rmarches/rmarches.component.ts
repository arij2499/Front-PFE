import { ProjetService } from '../Services/projet.service';
import { Component, OnInit } from '@angular/core';
import { Projet } from '../model/projet.model';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-rmarches',
  templateUrl: './rmarches.component.html',
  styleUrls: ['./rmarches.component.css']
})
export class RmarchesComponent implements OnInit {
  projets: Projet[];
  userConnect: any;
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
