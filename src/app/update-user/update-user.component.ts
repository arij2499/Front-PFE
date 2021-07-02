import { User } from '../model/user.model';
import { UserService } from '../Services/User.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
userConnect: any;
  currentUser  = new User();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
    this.userService.consulterUser(this.activatedRoute.snapshot.params.id).
    subscribe( prod =>{ this.currentUser = prod; }) ;
  }
  UpdateUser()
  {  this.userService.updateUser(this.currentUser).subscribe(() => {
    this.router.navigate(['users']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
   }

}
