import { Component, OnInit } from '@angular/core';
import {Todo } from './../../models/Todo';
import { GetAPIService } from './../../get-api.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

todos :any[] = [];

inputTodo: string="";

constructor(private api:GetAPIService) { }

  ngOnInit(): void {
    var apiTest = this.api.apiCall()
    console.log(apiTest)
    let temp;
    apiTest.then(d => {
      temp = d
      this.todos = temp

    })

    console.log(1, temp)

  }

  toggleDone = ( todo) => {
    this.todos = this.todos.filter((v, i) => todo.id !== v.id)
   }

   toggleComplete = (id) => {
    this.todos = this.todos.map((v, i) => id === v.id ? {...v, completed: !v.completed} : v)
    }
    // {
    //    if(id === v.id){
    //      return
    //    }
    //    return v
    //  }
    sort = () => {
      this.todos = this.todos.sort((a,b) => a.title.localeCompare(b.title))
    }


  addTodo = () => {
    this.todos.push({
      title: this.inputTodo,
      completed: false,
      id: this.todos.length + 1,
      userId: this.todos.length + 1
    });

    this.inputTodo="";
  }
}
