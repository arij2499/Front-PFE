import { Fonction } from '../model/fonction.model';
import { FonctionService } from '../Services/fonction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-update-fonction',
  templateUrl: './update-fonction.component.html',
  styleUrls: ['./update-fonction.component.css']
})
export class UpdateFonctionComponent implements OnInit {
userConnect: any;
  currentFonction  = new Fonction();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private userService: UserService,
    private fonctionService: FonctionService) { }

  ngOnInit() { 
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
    this.fonctionService.consulterFonction(this.activatedRoute.snapshot.params.id).
    subscribe( prod =>{ this.currentFonction = prod; }) ;
  }
  UpdateFonction()
  {  this.fonctionService.updateFonction(this.currentFonction).subscribe(() => {
    this.router.navigate(['fonctions']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
   }

}
