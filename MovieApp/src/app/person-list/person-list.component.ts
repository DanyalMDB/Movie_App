import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons:Person[]=[];

  constructor() { }

  ngOnInit(): void {

    this.persons.push(new Person(21,"Danyal",25))
    this.persons.push(new Person(112,"DanyalDanyal",5))
    this.persons.push(new Person(13,"DanyalDanyalDanyal",125))
    this.persons.push(new Person(14,"DanyDanyalDanyalDanyalal",225))

  }

}
