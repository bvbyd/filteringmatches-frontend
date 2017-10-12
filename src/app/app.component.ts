import { Component, OnInit } from '@angular/core';

import { Person } from './model/Person';
import { FilterDTO } from './model/FilterDTO';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  persons: Array<Person> = [];

  params: FilterDTO = {};

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.makeRequest();
  }

  makeRequest() {
    this.api.filter(this.params).then(r => this.persons = r);
  }

}
