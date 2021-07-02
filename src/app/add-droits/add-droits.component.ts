import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-add-droits',
  templateUrl: './add-droits.component.html',
  styleUrls: ['./add-droits.component.css']
})
export class AddDroitsComponent implements OnInit {
userConnect: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
  }

}
