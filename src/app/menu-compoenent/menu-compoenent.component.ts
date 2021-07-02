import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-menu-compoenent',
  templateUrl: './menu-compoenent.component.html',
  styleUrls: ['./menu-compoenent.component.css']
})
export class MenuCompoenentComponent implements OnInit {
users: User[];
userConnect: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
      this.userService.listeUser().subscribe(prods =>
        { console.log(prods);
          this.users = prods;
        } );
  }

}
