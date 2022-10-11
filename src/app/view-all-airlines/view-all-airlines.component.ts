import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-airlines',
  templateUrl: './view-all-airlines.component.html',
  styleUrls: ['./view-all-airlines.component.css']
})
export class ViewAllAirlinesComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.airList().subscribe(
      (data)=>{
        this.airData=data
      }
    )
  }

  airData:any=[]

  ngOnInit(): void {
  }

}
