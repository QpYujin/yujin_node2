import {Component} from '@angular/core';
import {BaThemeConfigProvider} from '../../../theme';

import {TodoService} from './todo.service';
import {CommunityService} from '../../../../restApi/community.services';

@Component({
  selector: 'todo',
  templateUrl: './todo.html',
  styleUrls: ['./todo.scss']
})
export class Todo {

  public dashboardColors = this._baConfig.get().colors.dashboard; addReminder:any;

  public todoList:Array<any>; public reminders:any;
  public newTodoText:string = '';

  constructor(private _baConfig:BaThemeConfigProvider, private _todoService:TodoService,
              protected communityService: CommunityService) {


    //this.todoList = this._todoService.getTodoList();


    this.communityService.getCommunitiesReminder()
      .then(data => {

        this.todoList = data;
        console.log(this.todoList);
      });

  }

  getNotDeleted() {
    return this.todoList.filter((item:any) => {
      return !item.deleted
    })
  }

  addToDoItem($event) {

    if (($event.which === 1 || $event.which === 13) && this.newTodoText.trim() != '') {

      this.todoList.unshift({
        text: this.newTodoText,
        community_id:localStorage.getItem('communityId')

      });
      this.addReminder={
        text: this.newTodoText,
        community_id:localStorage.getItem('communityId')
      }

      console.log("Added here add reminder"+JSON.stringify(this.addReminder) );
      this.communityService.addCommunityReminder(this.addReminder).then(() => {

      });

      this.newTodoText = '';
    }
  }

  private _getRandomColor() {
    let colors = Object.keys(this.dashboardColors).map(key => this.dashboardColors[key]);

    var i = Math.floor(Math.random() * (colors.length - 1));
    return colors[i];
  }
}
