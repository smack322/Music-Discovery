import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

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
  todos: Todo[]
  message: string
  // todos = [
  //   new Todo(1, 'Learn To Dance', false, new Date()),
  //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
  //   new Todo(3, 'Travel to Thailand', false, new Date())
  //   // {id: 1, description: 'Learn to Dance'},
  //   // {id: 2, description: 'Become an expert at Angular'},
  //   // {id: 3, description: 'Visit Thailand'}
  // ]
  todo = {
    id: 1,
    description: 'Learn to Dance'
  }
  constructor(
    private todoService:TodoDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }
  deleteTodo(id: any) {
    console.log(`Delete todo ${id}`);
    this.todoService.deleteTodo('in28minutes', id).subscribe(
      response =>  {
        console.log(response);
        this.message = `Delete of Todo id: ${id} Successful! `
        this.refreshTodos();
      }
    )
  }

  updateTodo(id: any) {
    console.log(`update ${id}`)
    this.router.navigate(['todos', id])
  }

}
