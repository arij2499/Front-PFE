import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-update-pif',
  templateUrl: './update-pif.component.html',
  styleUrls: ['./update-pif.component.css']
})
export class UpdatePifComponent implements OnInit {
userConnect: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
  }

}
