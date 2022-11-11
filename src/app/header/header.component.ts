import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  search="Type place to see the restuarant"
  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  searchTerm(event:any){
    console.log(event.target.value);
    let serachKey = event.target.value
    this.api.search.next(serachKey)
  }
}
