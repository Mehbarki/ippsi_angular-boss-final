import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/core/models/users';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  @Input() titre: string
  @Output() logoActive: EventEmitter<number> = new EventEmitter<number>(false);

  constructor(public user: UserService) { }

  ngOnInit(): void {
    this.logoActive.emit(2);
  }

  clickSurLogo() {
    console.info('je click sur le a href');
    this.logoActive.emit(1);

  }

  confirmNew() {
    confirm("voulez-vous faire une nouvelle partie ?")
  }
}
