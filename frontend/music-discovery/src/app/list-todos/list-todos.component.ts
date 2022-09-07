import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [
    new Todo(1, 'Learn To Dance', false, new Date()),
    new Todo(2, 'Become an Expert at Angular', false, new Date()),
    new Todo(3, 'Travel to Thailand', false, new Date())
    // {id: 1, description: 'Learn to Dance'},
    // {id: 2, description: 'Become an expert at Angular'},
    // {id: 3, description: 'Visit Thailand'}
  ]
  todo = {
    id: 1,
    description: 'Learn to Dance'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
