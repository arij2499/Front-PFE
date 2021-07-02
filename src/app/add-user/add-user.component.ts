import { UserService } from '../Services/User.service';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
userConnect: any;
  newUser= new User();

  constructor(private router: Router, private userService:UserService) { }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
  }
  addUser()
  {
    this.userService.ajouterUser(this.newUser).subscribe(prod=> {
      console.log(prod.projets);
      console.log(prod);

    }
    );

    this.router.navigate(['users']).then(()=> {
      window.location.reload();
    });
  }
}
