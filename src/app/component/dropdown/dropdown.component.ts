import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  country =[];
  state =[];
  city =[];
  selectedState=[];
  selectedCity=[];


  constructor(private _http : HttpClient) {
    this._http.get<any>("http://localhost:2000/api/dropdown").subscribe((result)=>{
      console.log(result);
      this.country = result[0];
      this.state = result[1];
      this.city = result[2];

      
    })
   }


  ngOnInit() {
  }

  onCountry(event){
    console.log("------", event);
    for(let i = 0; i < this.state.length; i++){
      if(this.state[i].countryId == event){
        this.selectedState.push(this.state[i]);
      }
    }
    console.log(this.selectedState);
  }

  onState(event){
    for(let i = 0; i < this.city.length; i++){
      if(this.city[i].stateId == event){
        this.selectedCity.push(this.city[i]);
      }
    }
    console.log(this.selectedCity);
  }

}
