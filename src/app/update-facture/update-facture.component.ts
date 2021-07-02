import { Facture } from '../model/facture.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FactureService } from '../Services/facture.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-update-facture',
  templateUrl: './update-facture.component.html',
  styleUrls: ['./update-facture.component.css']
})
export class UpdateFactureComponent implements OnInit {
userConnect: any;
  currentFacture  = new Facture();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private userService: UserService,
    private factureService: FactureService) { }

  ngOnInit() { 
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
    this.factureService.consulterFacture(this.activatedRoute.snapshot.params.id).
    subscribe( prod =>{ this.currentFacture = prod; }) ;

  }
  UpdateFacture()
  {  this.factureService.updateFacture(this.currentFacture).subscribe(() => {
    this.router.navigate(['factures']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
   }

}
