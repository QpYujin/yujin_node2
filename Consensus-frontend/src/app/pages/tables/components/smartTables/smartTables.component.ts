import { Component } from '@angular/core';

import { SmartTablesService } from './smartTables.service';

@Component({
  selector: 'smart-tables',
  templateUrl: './smartTables.html',
  styleUrls: ['./smartTables.scss']
})
export class SmartTables {

  query: string = '';

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number'
      },
      firstName: {
        title: 'First Name',
        type: 'string'
      },
      lastName: {
        title: 'Last Name',
        type: 'string'
      },
      username: {
        title: 'Username',
        type: 'string'
      },
      email: {
        title: 'E-mail',
        type: 'string'
      },
      age: {
        title: 'Age',
        type: 'number'
      }
    }
  };

 data = [
    {
      id: 1,
      firstName: 'June-2017',
      lastName: 'Swimming Pool',
      username: '$ 500',
      email: 'mdo@gmail.com',
      age: '28'
    },
    {
      id: 2,
      firstName: 'June-2017',
      lastName: 'Cleaning',
      username: '$ 120',
      email: 'fat@yandex.ru',
      age: '45'
    },
    {
      id: 3,
      firstName: 'June-2017',
      lastName: 'Club House',
      username: '$ 128',
      email: 'twitter@outlook.com',
      age: '18'
    },
    {
      id: 4,
      firstName: 'June-2017',
      lastName: 'Swimming Pool',
      username: '$ 100',
      email: 'snow@gmail.com',
      age: '20'
    },
    {
      id: 5,
      firstName: 'June-2017',
      lastName: 'Landscaping',
      username: '$ 200',
      email: 'jack@yandex.ru',
      age: '30'
    },
    {
      id: 6,
      firstName: 'June-2017',
      lastName: 'Landscaping',
      username: '$ 20',
      email: 'ann@gmail.com',
      age: '21'
    },
    {
      id: 1,
      firstName: 'June-2017',
      lastName: 'Swimming Pool',
      username: '$ 500',
      email: 'mdo@gmail.com',
      age: '28'
    },
    {
      id: 2,
      firstName: 'June-2017',
      lastName: 'Cleaning',
      username: '$ 120',
      email: 'fat@yandex.ru',
      age: '45'
    },
    {
      id: 3,
      firstName: 'June-2017',
      lastName: 'Club House',
      username: '$ 128',
      email: 'twitter@outlook.com',
      age: '18'
    },
    {
      id: 4,
      firstName: 'June-2017',
      lastName: 'Swimming Pool',
      username: '$ 100',
      email: 'snow@gmail.com',
      age: '20'
    },
    {
      id: 5,
      firstName: 'June-2017',
      lastName: 'Landscaping',
      username: '$ 200',
      email: 'jack@yandex.ru',
      age: '30'
    },
    {
      id: 1,
      firstName: 'June-2017',
      lastName: 'Swimming Pool',
      username: '$ 500',
      email: 'mdo@gmail.com',
      age: '28'
    },
    {
      id: 2,
      firstName: 'June-2017',
      lastName: 'Cleaning',
      username: '$ 120',
      email: 'fat@yandex.ru',
      age: '45'
    },
    {
      id: 3,
      firstName: 'June-2017',
      lastName: 'Club House',
      username: '$ 128',
      email: 'twitter@outlook.com',
      age: '18'
    },
    {
      id: 4,
      firstName: 'June-2017',
      lastName: 'Swimming Pool',
      username: '$ 100',
      email: 'snow@gmail.com',
      age: '20'
    },
    {
      id: 5,
      firstName: 'June-2017',
      lastName: 'Landscaping',
      username: '$ 200',
      email: 'jack@yandex.ru',
      age: '30'
    },
    {
      id: 1,
      firstName: 'June-2017',
      lastName: 'Swimming Pool',
      username: '$ 500',
      email: 'mdo@gmail.com',
      age: '28'
    },
    {
      id: 2,
      firstName: 'June-2017',
      lastName: 'Cleaning',
      username: '$ 120',
      email: 'fat@yandex.ru',
      age: '45'
    },
    {
      id: 3,
      firstName: 'June-2017',
      lastName: 'Club House',
      username: '$ 128',
      email: 'twitter@outlook.com',
      age: '18'
    },
    {
      id: 4,
      firstName: 'June-2017',
      lastName: 'Swimming Pool',
      username: '$ 100',
      email: 'snow@gmail.com',
      age: '20'
    },
    {
      id: 5,
      firstName: 'June-2017',
      lastName: 'Landscaping',
      username: '$ 200',
      email: 'jack@yandex.ru',
      age: '30'
    },
    {
      id: 1,
      firstName: 'June-2017',
      lastName: 'Swimming Pool',
      username: '$ 500',
      email: 'mdo@gmail.com',
      age: '28'
    },
    {
      id: 2,
      firstName: 'June-2017',
      lastName: 'Cleaning',
      username: '$ 120',
      email: 'fat@yandex.ru',
      age: '45'
    },];

 // source: LocalDataSource = new LocalDataSource();



  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
