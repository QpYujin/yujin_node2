import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {

  private _todoList = [
    { text: 'Reminder for contributing towards the expenses associated with the use and maintenance of the facilities' },
    { text: 'Please leave the Community House in the condition in which you found it' },
    { text: 'The Property Coordinator maintain the schedule of groups currently using the Community House' },
    { text: 'Benches should be replaced if they are moved during use' },
    { text: 'Swimming Pool will be closed for a week due to maintenance of it' },
    { text: 'Payment due notification' },
    { text: 'get-together event this sunday notification' },
    { text: 'Meeting Notification this sunday' },

  ];

  getTodoList() {
    return this._todoList;
  }
}
