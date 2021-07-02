import { Fonction } from '../model/fonction.model';
import { FonctionService } from '../Services/fonction.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-add-fonction',
  templateUrl: './add-fonction.component.html',
  styleUrls: ['./add-fonction.component.css']
})
export class AddFonctionComponent implements OnInit {
  newFonction= new Fonction();
  userConnect: any;
  constructor(private router: Router,private userService: UserService, private fonctionService:FonctionService) { }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
  }
  addFonction()
  {
    this.fonctionService.ajouterFonction(this.newFonction).subscribe(prod=> {

      console.log(prod);

    }
    );

    this.router.navigate(['fonctions']).then(()=> {
      window.location.reload();
    });
  }

}
