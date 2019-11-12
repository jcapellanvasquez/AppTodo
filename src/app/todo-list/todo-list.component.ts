import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../structure/todo-item';
import {ArrayConcatBuiltinFn} from '@angular/compiler-cli/src/ngtsc/partial_evaluator/src/builtin';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todo: TodoItem = {
    completed: true,
    completedDate: null,
    description: '',
    id: null,
    title: '',
    createdDate: null
  }


  public allTodo: number = 0;
  public completedTodo: number = 0;

  public todos: TodoItem[] = [];

  constructor() { }

  public addTodo() {
    this.todos.push({
      completed: false,
      createdDate: Date.now(),
      title: this.todo.title,
      description: this.todo.description,
      completedDate: this.todo.completedDate,
      id: this.todos.length + 1,
      showDetails: false
    })

    this.todo.title = '';
    this.todo.description = '';
    this.todo.completedDate = null;
  }

  public completeTodo(todo: TodoItem) {
    this.todos.forEach((item, indiceInterno)=> {
      if (item.id === todo.id) {
        item.completed = true;
        this.getCompletedTodo();
      }
    })
  }

  public showDetailsTodo(todo: TodoItem) {
    todo.showDetails = !todo.showDetails;
  }

  public getCompletedTodo() {
    this.completedTodo =  this.todos.filter( todo => todo.completed).length
  }


  public deleteTodo(todo: TodoItem) {
    let indice = null;

    this.todos.forEach((item, indiceInterno)=> {
        if (item.id==todo.id) {
          indice = indiceInterno;

        }
    })


    if (indice !== null) {
      this.todos.splice(indice, 1)
      this.getCompletedTodo();
    }
  }


  ngOnInit() {
  }

}
