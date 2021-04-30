import { getMissingNgModuleMetadataErrorData } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/users';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  user: User = new User();

  constructor(private UserService: UserService, private router: Router ) {
   }

  ngOnInit(): void {

  }

  clickConnection() {
    /**
     * 
     */
    const observable = this.UserService.authenticateAPI(this.user.username, this.user.password); //L'API nous renverrais un JSON
    observable.subscribe(validateData => {
      if(!validateData && validateData.connected == true) {
        this.router.navigate(['/'])
      }
      });     
      

    this.router.navigate(['/']);
  }

}
