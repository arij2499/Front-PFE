import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-plantravail-financier',
  templateUrl: './plantravail-financier.component.html',
  styleUrls: ['./plantravail-financier.component.css']
})
export class PlantravailFinancierComponent implements OnInit {
userConnect: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
  }

}
