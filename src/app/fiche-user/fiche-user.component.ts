import { User } from '../model/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../Services/User.service';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-fiche-user',
  templateUrl: './fiche-user.component.html',
  styleUrls: ['./fiche-user.component.css']
})
export class FicheUserComponent implements OnInit {
userConnect: any;
  currentUser  = new User();
  constructor (private activatedRoute: ActivatedRoute,
    private router :Router,
    private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
    this.userService.consulterUser(this.activatedRoute.snapshot.params.id).
    subscribe( prod =>{ this.currentUser = prod; }) ;
 }
 VisualiserUser()
  {  this.userService.visualiserUser(this.currentUser).subscribe(() => {
    this.router.navigate(['users']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
  }
}
