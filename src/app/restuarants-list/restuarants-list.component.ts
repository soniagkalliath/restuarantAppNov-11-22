import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-restuarants-list',
  templateUrl: './restuarants-list.component.html',
  styleUrls: ['./restuarants-list.component.css']
})
export class RestuarantsListComponent implements OnInit {

  //properties
  rest = "All Resturant List"

  //to hold resturant list
  restuarantsList:any = []

  lDate:any

  // to hold searchterm
  searchTerm=""

  //dependency Injection
  constructor(private apiService:ApiService) { 
    this.lDate = new Date()
  }

  ngOnInit(): void {

    //api call -asynchronous call - resolve state - subscribe()
    this.apiService.getAllRestuarantsList()
    .subscribe((result)=>{
      this.restuarantsList = result
      console.log(this.restuarantsList);  
    })

    //to get search term from api service
    this.apiService.search.subscribe((data)=>{
      console.log(data);
      this.searchTerm = data
    })

  }

}
