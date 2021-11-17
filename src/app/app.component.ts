import { Component } from '@angular/core';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  state = [];
  city = [];
  constructor(private _proServ : ProfileService) {
    this.state = this._proServ.state();

    
  }


  onChange(state){
    this.city = this._proServ.city().filter(e=>e.id == state.target.value);
    
  }




  title = 'frontend';
}




