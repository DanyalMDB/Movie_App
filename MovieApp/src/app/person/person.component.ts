import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  per:Person;
  
  constructor() { 
    this.per=new Person(12,"Danyal",23)
  }

  ngOnInit(): void {
  }

}
