import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent{

  todos = ['Jogging', 'Coding', 'Get Veggies', 'Submit Assignment'];
  addtodo(newtodo: string) {
    if (newtodo) {
      this.todos.push(newtodo);
    }
  }
}
