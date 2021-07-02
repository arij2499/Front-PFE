import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-fiche-projetmarche',
  templateUrl: './fiche-projetmarche.component.html',
  styleUrls: ['./fiche-projetmarche.component.css']
})
export class FicheProjetmarcheComponent implements OnInit {
userConnect: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
  }

}
