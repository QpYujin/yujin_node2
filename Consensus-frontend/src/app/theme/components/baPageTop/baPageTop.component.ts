import {Component,OnInit} from '@angular/core';

import {GlobalState} from '../../../global.state';

import { AuthService } from '../../../auth.service';



@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
  styleUrls: ['./baPageTop.scss']
})
export class BaPageTop implements OnInit{
name:any;
  community:any;
  user:any;

  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;

  constructor(private _state:GlobalState,
              public authService: AuthService,
 ) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  ngOnInit(): void {

    console.log("name is here"+this.name)
    this.community=localStorage.getItem('communityName');

    this.user=localStorage.getItem('currentUser');

  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
}
