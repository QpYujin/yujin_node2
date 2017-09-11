import {Component} from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';

@Component({
  selector: 'layouts',
  templateUrl: './layouts.html',
})
export class Layouts {

  public defaultPicture = 'assets/img/theme/no-photo.png';
  public profile:any = {
    picture: 'assets/img/app/profile/Nasta.png'
  };
  public uploaderOptions:NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };

  public fileUploaderOptions:NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };

 public  clubs=[{
    id: 1,
    firstName: 'Swimming Club',
    lastName: '12',
    username: 'true',
    email: 'as',
    age: '28'
  },
    {
      id: 2,
      firstName: 'June-2017',
      lastName: 'Edwared hone',
      username: 'Not paid',
      color:'red',
      email: 'fat@yandex.ru',
      age: '45',

    },
    {
      id: 3,
      firstName: 'June-2017',
      lastName: 'Joa puja',
      username: '$ 128',
      email: 'twitter@outlook.com',
      age: '18'
    },
    {
      id: 4,
      firstName: 'June-2017',
      lastName: 'Jimmey park',
      username: 'Not paid',
      color:'red',
      email: 'snow@gmail.com',
      age: '20'
    },
    {
      id: 5,
      firstName: 'June-2017',
      lastName: 'Lee Jane',
      username: 'Not paid',
      color:'red',
      email: 'jack@yandex.ru',
      age: '30'
    },
    {
      id: 6,
      firstName: 'June-2017',
      lastName: 'Joa puja',
      username: '$ 128',
      email: 'twitter@outlook.com',
      age: '18'
    }]

  constructor() {
  }

  ngOnInit() {
  }
}
