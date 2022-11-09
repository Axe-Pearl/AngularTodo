import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Todo';
  newTask = "";
  list : string[]= [];
  addTodo(){
    if(this.newTask.trim().length !== 0) this.list.push(this.newTask);
    this.newTask = "";
  }
  onDelete(index: number){
    this.list.splice(index, 1)
  }
}
