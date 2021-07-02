import { ProfilService } from '../Services/profil.service';
import { Profil } from '../model/profil.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.component.html',
  styleUrls: ['./update-profil.component.css']
})
export class UpdateProfilComponent implements OnInit {
userConnect: any;
  currentProfil  = new Profil();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private userService: UserService,
    private profilService: ProfilService) { }

  ngOnInit() { 
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
    this.profilService.consulterProfil(this.activatedRoute.snapshot.params.id).
    subscribe( prod =>{ this.currentProfil = prod; }) ;

  }
  UpdateProfil()
  {  this.profilService.updateProfil(this.currentProfil).subscribe(() => {
    this.router.navigate(['profils']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
   }
}
