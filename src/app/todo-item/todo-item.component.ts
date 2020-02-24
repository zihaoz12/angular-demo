import { Component, OnInit } from '@angular/core';

interface TodoItem{
  id:number;
  title:string;
  isCompleted:boolean;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})


export class TodoItemComponent implements OnInit {

  todoList = [];

  todoId:number = 1;

  todoValue;

  constructor() { }

  ngOnInit(): void {
  }

  
  addNewTodo(){
    if(!this.todoValue){
      return false;
    }
    const newTodo:TodoItem = {
      id: this.todoId++,
      title: this.todoValue,
      isCompleted:false
    }
    console.log(newTodo);
    this.todoList.push(newTodo);
    this.todoValue = "";

  }

  removeTodo(index):void{
    this.todoList.splice(index,1)
  }

  completeTodo(index):void{
    this.todoList[index].isCompleted = !this.todoList[index].isCompleted
  }

}
