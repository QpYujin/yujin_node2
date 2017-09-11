import {Component} from '@angular/core';
import {TreeModel} from 'ng2-tree';
import { SmartTablesService } from '../../../tables/components/smartTables/smartTables.service';
import { LocalDataSource } from 'ng2-smart-table';
import {CommunityService} from '../../../../../restApi/community.services';

@Component({
  selector: 'tree-view',
  templateUrl: './treeView.html',
  styleUrls: ['./treeView.scss']
})

export class TreeView {

  communityExpenses :any; expenses=[];monthString:string;setBoolean:boolean

  cities = [{'name': 'SF'}, {'name': 'NYC'}, {'name': 'Buffalo'}];
  month = [{'name': 'January','id':'1'}, {'name': 'February','id':'2'}, {'name': 'March','id':'3'},
        {'name': 'April','id':'4'}, {'name': 'May','id':'5'}, {'name': 'June','id':'6'},
       {'name': 'July','id':'7'}, {'name': 'August','id':'8'}, {'name': 'September','id':'9'},
       {'name': 'October','id':'10'}, {'name': 'November','id':'11'}, {'name': 'December','id':'12'}];
  selectedCity = this.cities[1];
  selectedMonth = this.month[0];

  constructor(protected service: SmartTablesService,
  private communityService:CommunityService) {

    let date = new Date();
    let iMonth = date.getMonth();
    this.selectedMonth = this.month[iMonth];

    this.setBoolean =true;
    this.communityService.getCommunitiesExpenses().then(data => {
      this.communityExpenses = data;
     //this.expenses= this.communityExpenses;

    });
  }
  isCurrentYear(year){
    let date = new Date();
    if (date.getFullYear() == year) return true;
    return false;
  }
  onChange(city) {
    console.log(city.name);
  }
  onChangeMonth(month) {
    var t ;var d;
   //this.monthId= month.id;
    this.setBoolean =true;
    this.communityService.getCommunitiesExpenses().then(data => {
      this.communityExpenses = data;
      //this.expenses= this.communityExpenses;


    for(var  i =0;i <this.communityExpenses.length;i++){

     // var d = new Date(this.communityExpenses[i].created);
     // console.log(d.getMonth()+1);

      console.log("picked month"+month.name +this.communityExpenses[i].month);

      if(this.communityExpenses[i].month == month.name){
        this.expenses.push(this.communityExpenses[i]);
        console.log("checked the value"+this.communityExpenses[i].month);
      }
    }
if(this.expenses.length == 0){
      this.setBoolean =false;
}
else{
  this.setBoolean =true;
}
    this.communityExpenses=this.expenses;
      this.expenses=[];
    console.log("picked month"+month.id+JSON.stringify(this.expenses));
    });
  }


data=[
{
  id: 1,
  firstName: 'June-2017',
  lastName: 'Landscaping',
  username: '$ 500',
  email: 'mdo@gmail.com',
  age: '28',
  descriptiion:'Buying new sprinklers for the main lawn',
  vendor:'Home Depot'
},
{
  id: 2,
    firstName: 'June-2017',
  lastName: 'Swimming Pool',
  username: '$ 120',
  email: 'fat@yandex.ru',
  age: '45',
  descriptiion:'Buying new Titles for pool',
  vendor:'Home Depot'
},
{
  id: 3,
    firstName: 'June-2017',
  lastName: 'Gym',
  username: '$ 128',
  email: 'twitter@outlook.com',
  age: '18',
  descriptiion:'Buying carpet for gym',
  vendor:'Walmart'
},
{
  id: 4,
    firstName: 'June-2017',
  lastName: 'Club House',
  username: '$ 100',
  email: 'snow@gmail.com',
  age: '20',
  descriptiion:'Buying new Bulbs for the club house',
  vendor:'Home Depot'
},
{
  id: 5,
    firstName: 'June-2017',
  lastName: 'Office',
  username: '$ 200',
  email: 'jack@yandex.ru',
  age: '30',
  descriptiion:'Buying snacks for the guests',
  vendor:'Walmart'
},
{
  id: 6,
    firstName: 'June-2017',
  lastName: 'Landscaping',
  username: '$ 20',
  email: 'ann@gmail.com',
  age: '21',
  descriptiion:'Buying new sprinklers for the main lawn',
  vendor:'Home Depot'
},
{
  id: 7,
    firstName: 'June-2017',
  lastName: 'Landscaping',
  username: '$ 500',
  email: 'mdo@gmail.com',
  age: '28',
  descriptiion:'Buying new sprinklers for the main lawn',
  vendor:'Home Depot'
},
  {id: 8,
  firstName: 'June-2017',
  lastName: 'Landscaping',
  username: '$ 500',
  email: 'mdo@gmail.com',
  age: '28',
    descriptiion:'Buying new sprinklers for the main lawn',
    vendor:'Home Depot'
},
{
  id: 9,
    firstName: 'June-2017',
  lastName: 'Cleaning',
  username: '$ 120',
  email: 'fat@yandex.ru',
  age: '45',
  descriptiion:'Buying new sprinklers for the main lawn',
  vendor:'Home Depot'
},
{
  id: 10,
    firstName: 'June-2017',
  lastName: 'Club House',
  username: '$ 128',
  email: 'twitter@outlook.com',
  age: '18',
  descriptiion:'Buying new sprinklers for the main lawn',
  vendor:'Home Depot'
},
{
  id: 11,
    firstName: 'June-2017',
  lastName: 'Swimming Pool',
  username: '$ 100',
  email: 'snow@gmail.com',
  age: '20',
  descriptiion:'Buying new sprinklers for the main lawn',
  vendor:'Home Depot'
},
{
  id: 12,
    firstName: 'June-2017',
  lastName: 'Landscaping',
  username: '$ 200',
  email: 'jack@yandex.ru',
  age: '30',
  descriptiion:'Buying new sprinklers for the main lawn',
  vendor:'Home Depot'
}];


  tree: TreeModel = {
    value: 'Programming languages by programming paradigm',
    children: [
      {
        value: 'Object-oriented programming',
        children: [
          {value: 'Java'},
          {value: 'C++'},
          {value: 'C#'},
        ]
      },
      {
        value: 'Prototype-based programming',
        children: [
          {value: 'JavaScript'},
          {value: 'CoffeeScript'},
          {value: 'Lua'},
        ]
      }
    ]
  };
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
    /*  id: {
        title: 'ID',
        type: 'number'
      },*/
      firstName: {
        title: 'Month/Year',
        type: 'string'
      },
      lastName: {
        title: 'Expense Type',
        type: 'string'
      },
      username: {
        title: 'Amount Paid',
        type: 'string'
      },
    /*  email: {
        title: 'E-mail',
        type: 'string'
      },
      age: {
        title: 'Age',
        type: 'number'
      }*/
    }
  };

  source: LocalDataSource = new LocalDataSource();



  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }



}
