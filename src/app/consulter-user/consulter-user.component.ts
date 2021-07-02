import { User } from '../model/user.model';
import { UserService } from '../Services/User.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulter-user',
  templateUrl: './consulter-user.component.html',
  styleUrls: ['./consulter-user.component.css']
})
export class ConsulterUserComponent implements OnInit {

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
