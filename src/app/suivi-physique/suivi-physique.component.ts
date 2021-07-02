import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-suivi-physique',
  templateUrl: './suivi-physique.component.html',
  styleUrls: ['./suivi-physique.component.css']
})
export class SuiviPhysiqueComponent implements OnInit {
userConnect: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
  }

}
