import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-update-ptf',
  templateUrl: './update-ptf.component.html',
  styleUrls: ['./update-ptf.component.css']
})
export class UpdatePtfComponent implements OnInit {
userConnect : any;
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
  }

}
