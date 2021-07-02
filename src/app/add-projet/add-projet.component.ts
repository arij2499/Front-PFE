import { ProjetService } from '../Services/projet.service';
import { Router } from '@angular/router';
import { Projet } from '../model/projet.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.css']
})
export class AddProjetComponent implements OnInit {

  newProjet= new Projet();
userConnect: any;
  constructor(private router: Router,private userService: UserService, private projetService:ProjetService) { }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
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
