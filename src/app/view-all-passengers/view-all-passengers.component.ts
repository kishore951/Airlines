import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-passengers',
  templateUrl: './view-all-passengers.component.html',
  styleUrls: ['./view-all-passengers.component.css']
})
export class ViewAllPassengersComponent implements OnInit {

  constructor( private myapi:ApiService) {
    this.fetchData()
   }


  fetchData=()=>{
    this.myapi.passList().subscribe(
      (data)=>{
        this.passData=data
      }
    )
  }
  passData:any={}

  ngOnInit(): void {
  }
}


